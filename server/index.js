import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import typeDefs from "./typeDefs.js";
import randomPostGenerator from "./randomPostGenerator.js";
import { PubSub } from "graphql-subscriptions";
import getCurrentDateAndTime from "./getCurrentDateAndTime.js";

const currentDateAndTime = getCurrentDateAndTime();

const defaultPost = {
  id: currentDateAndTime,
  time: currentDateAndTime,
  text: "This is the deafult post",
  name: "Amrit Kumar",
  username: "amritx8",
};

let posts = [defaultPost];

const pubsub = new PubSub();

setInterval(() => {
  const post = randomPostGenerator();
  if (posts.length < 100) {
    pubsub.publish("POST_CREATED", { postCreated: post });
    posts.push(post);
  }
}, 3000);

const resolvers = {
  Query: {
    posts: () => posts,
    latestPost: () => {
      let latestPost = posts[0];
      posts.forEach((post) => {
        let x = Number(post.time);
        let y = Number(latestPost.time);
        if (x > y) {
          latestPost = post;
        }
      });
      return latestPost;
    },
  },
  Mutation: {
    reset: () => {
      posts = [defaultPost];
      return true;
    },
    createPost: (_, { post }) => {
      pubsub.publish("POST_CREATED", { postCreated: post });
      posts.push(post);
      return post;
    },
    deletePost: (_, { post }) => {
      posts = posts.filter((_post) => _post.id !== post.id);
      return post;
    },
    updatePost: (_, { post }) => {
      posts = posts.map((_post) => (_post.id !== post.id ? _post : post));
      return post;
    },
  },
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(["POST_CREATED"]),
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

await server.start();
server.applyMiddleware({ app });

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(
    `Server is now running on http://localhost:${PORT}${server.graphqlPath}`
  );
});

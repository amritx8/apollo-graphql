const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

let posts = [];

const randomPost = () => {
  return {
    id: Date.now().toString(),
    time: Date.now().toString(),
    text: "slakdnlksd",
    name: "kjdbfksdbf",
    username: "sadlkbalsdnlas",
  };
};

// setInterval(() => {
//   const post = randomPost();
//   posts.push(post);
// }, 5000);

const typeDefs = gql`
  type Post {
    id: String!
    time: String!
    text: String!
    name: String!
    username: String!
  }

  input PostInput {
    id: String!
    time: String!
    text: String!
    name: String!
    username: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(post: PostInput): Post
  }

  type Mutation {
    deletePost(post: PostInput): Post
  }

  type Mutation {
    updatePost(post: PostInput): Post
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    createPost: (_, { post }) => {
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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

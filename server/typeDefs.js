import { gql } from "apollo-server";

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
    latestPost: Post
  }

  type Mutation {
    reset(time: String): Boolean!
    createPost(post: PostInput): Post!
    deletePost(post: PostInput): Post!
    updatePost(post: PostInput): Post!
  }

  type Subscription {
    postCreated: Post!
  }
`;

export default typeDefs;

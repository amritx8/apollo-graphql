import gql from "graphql-tag";
import { POST_FRAGMENT } from "./Fragments";

export const CREATE_POST = gql`
  ${POST_FRAGMENT}
  mutation CreatePost($post: PostInput!) {
    createPost(post: $post) {
      ...PostInfo
    }
  }
`;

export const DELETE_POST = gql`
  ${POST_FRAGMENT}
  mutation DeletePost($post: PostInput!) {
    deletePost(post: $post) {
      ...PostInfo
    }
  }
`;

export const UPDATE_POST = gql`
  ${POST_FRAGMENT}
  mutation UpdatePost($post: PostInput!) {
    updatePost(post: $post) {
      ...PostInfo
    }
  }
`;

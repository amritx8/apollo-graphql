import gql from "graphql-tag";
import { POST_FRAGMENT } from "./Fragments";

export const GET_POSTS = gql`
  ${POST_FRAGMENT}
  query GetPosts {
    posts {
      ...PostInfo
    }
  }
`;

export const GET_LATEST_POST = gql`
  ${POST_FRAGMENT}
  query GetLatestPost {
    latestPost {
      ...PostInfo
    }
  }
`;

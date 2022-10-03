import gql from "graphql-tag";
import { POST_FRAGMENT } from "./Fragments";

export const POSTS_SUBSCRIPTION = gql`
  ${POST_FRAGMENT}
  subscription PostCreated {
    postCreated {
      ...PostInfo
    }
  }
`;

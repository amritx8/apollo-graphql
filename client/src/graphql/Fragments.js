import gql from "graphql-tag";

export const POST_FRAGMENT = gql`
  fragment PostInfo on Post {
    id
    time
    text
    name
    username
  }
`;

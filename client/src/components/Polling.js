import React from "react";
import { GET_LATEST_POST } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import Post from "./Post";

const Polling = ({ setPostUpdate }) => {
  const { loading, error, data } = useQuery(GET_LATEST_POST, {
    pollInterval: 3000,
  });
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>Error: {error}</h3>
      ) : (
        <Post post={data.latestPost} setPostUpdate={setPostUpdate} />
      )}
    </div>
  );
};

export default Polling;

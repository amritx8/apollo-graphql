import React from "react";
import Button from "react-bootstrap/esm/Button";
import { GET_LATEST_POST } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import Post from "./Post";

const Refetching = ({ setPostUpdate }) => {
  const { loading, error, data, refetch } = useQuery(GET_LATEST_POST);
  return (
    <div className="refetch-container">
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>Error: {error}</h3>
      ) : (
        <Post post={data.latestPost} setPostUpdate={setPostUpdate} />
      )}
      <Button variant="primary" onClick={() => refetch()}>
        Refetch
      </Button>
    </div>
  );
};

export default Refetching;

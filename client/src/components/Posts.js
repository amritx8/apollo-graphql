import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Post from "./Post";
import { GET_POSTS } from "../graphql/Queries";

const Posts = ({ setPostUpdate }) => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    pollInterval: 1000,
  });

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container-2">
      <div className="posts-container">
        {data.posts.map((_post) => (
          <Post key={_post.id} post={_post} setPostUpdate={setPostUpdate} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

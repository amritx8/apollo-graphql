import React, { useEffect, useState } from "react";
import { useSubscription } from "@apollo/client";
import { POSTS_SUBSCRIPTION } from "../graphql/Subscriptions";
import Post from "./Post";

const Subscription = ({ setPostUpdate }) => {
  const [post, setPost] = useState("");
  const { loading, error, data } = useSubscription(POSTS_SUBSCRIPTION);
  useEffect(() => {
    console.log(data);
    if (data && data.postCreated) {
      setPost(data.postCreated);
    }
  }, [data]);
  return (
    <div>
      {post && <Post post={data.postCreated} setPostUpdate={setPostUpdate} />}
    </div>
  );
};

export default Subscription;

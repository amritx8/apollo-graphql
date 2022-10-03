import React from "react";
import Options from "./Options";
import Refetching from "./Refetching";
import Polling from "./Polling";
import Subscription from "./Subscription";

const LatestPost = ({ policy, setPolicy, setPostUpdate }) => {
  return (
    <div className="latest-post-container">
      <h2>Latest Post</h2>
      <Options policy={policy} setPolicy={setPolicy} />
      {policy === "refetching" && <Refetching setPostUpdate={setPostUpdate} />}
      {policy === "polling" && <Polling setPostUpdate={setPostUpdate} />}
      {policy === "subscription" && (
        <Subscription setPostUpdate={setPostUpdate} />
      )}
    </div>
  );
};

export default LatestPost;

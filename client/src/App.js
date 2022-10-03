import React, { useState } from "react";
import FormBox from "./components/FormBox";
import Posts from "./components/Posts";
import LatestPost from "./components/LatestPost";
import "../public/App.css";
import Button from "react-bootstrap/esm/Button";
import { useMutation } from "@apollo/client";
import { REST } from "./graphql/Mutations";

export default function App() {
  const [policy, setPolicy] = useState("none");
  const [postUpdate, setPostUpdate] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [reset] = useMutation(REST);
  return (
    <div className="container">
      <div className="sub-container-1">
        <FormBox postUpdate={postUpdate} setPostUpdate={setPostUpdate} />
        <LatestPost
          policy={policy}
          setPolicy={setPolicy}
          setPostUpdate={setPostUpdate}
        />
      </div>
      <div className="buttons">
        <Button onClick={() => reset()}>Reset</Button>
        <Button onClick={() => setShowAll((showAll) => !showAll)}>
          {!showAll ? "ShowAll" : "HideAll"}
        </Button>
      </div>
      {showAll && (
        <div className="sub-container-2">
          <Posts setPostUpdate={setPostUpdate} />
        </div>
      )}
    </div>
  );
}

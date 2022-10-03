import React, { useState } from "react";
import FormBox from "./components/FormBox";
import Posts from "./components/Posts";
import Options from "./components/Options";
import "../public/App.css";

export default function App() {
  const [policy, setPolicy] = useState("none");
  const [postUpdate, setPostUpdate] = useState(null);
  return (
    <div className="container">
      <FormBox postUpdate={postUpdate} setPostUpdate={setPostUpdate} />
      <div className="sub-container">
        <Options policy={policy} setPolicy={setPolicy} />
        <Posts setPostUpdate={setPostUpdate} />
      </div>
    </div>
  );
}

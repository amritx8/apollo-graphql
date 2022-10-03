import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Options = ({ policy, setPolicy }) => {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant={policy === "refetching" ? "primary" : "light"}
          onClick={() => {
            setPolicy("refetching");
          }}
        >
          Refetching
        </Button>
        <Button
          variant={policy === "polling" ? "primary" : "light"}
          onClick={() => {
            setPolicy("polling");
          }}
        >
          Polling
        </Button>
        <Button
          variant={policy === "subscription" ? "primary" : "light"}
          onClick={() => {
            setPolicy("subscription");
          }}
        >
          Subscriptions
        </Button>
        <Button
          variant={policy === "none" ? "primary" : "light"}
          onClick={() => {
            setPolicy("none");
          }}
        >
          None
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Options;

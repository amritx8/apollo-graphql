import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Options = ({ policy, setPolicy }) => {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="primary"
          onClick={() => {
            setPolicy("refecting");
          }}
        >
          Refetching
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setPolicy("polling");
          }}
        >
          Polling
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setPolicy("subscription");
          }}
        >
          Subscriptions
        </Button>
        <Button
          variant="primary"
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

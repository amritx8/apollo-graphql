import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GET_POSTS } from "../graphql/Queries";
import { CREATE_POST, UPDATE_POST } from "../graphql/Mutations";

const FormBox = ({ postUpdate, setPostUpdate }) => {
  const [text, setText] = useState(postUpdate ? postUpdate.text : "");
  const [name, setName] = useState(postUpdate ? postUpdate.name : "");
  const [username, setUsername] = useState(postUpdate ? postUpdate.email : "");

  const [createPost] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS }, "GetPosts"],
  });

  const [updatePost] = useMutation(UPDATE_POST, {
    refetchQueries: [{ query: GET_POSTS }, "GetPosts"],
  });

  useEffect(() => {
    if (postUpdate) {
      setText(postUpdate.text);
      setName(postUpdate.name);
      setUsername(postUpdate.username);
    }
  }, [postUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (postUpdate) {
      updatePost({
        variables: {
          post: {
            id: postUpdate.id,
            time: postUpdate.time,
            text: text,
            name: name,
            username: username,
          },
        },
      });
      setPostUpdate(null);
    } else {
      createPost({
        variables: {
          post: {
            id: Date.now().toString(),
            time: Date.now().toLocaleString(),
            text,
            name,
            username,
          },
        },
      });
    }
  };

  return (
    <div className="form-container">
      <div>
        <h2>Create Post</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>

          <div className="button-group1">
            <Button variant="primary" type="submit">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormBox;

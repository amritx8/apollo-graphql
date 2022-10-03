import React from "react";
import { IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useMutation } from "@apollo/client";
import { GET_POSTS } from "../graphql/Queries";
import { DELETE_POST } from "../graphql/Mutations";

const link =
  "http://store-images.s-microsoft.com/image/apps.50484.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2c71c1ea-c28f-4dd1-b72d-c43cdd3476f4";

const imageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "100%",
};

const Post = ({ post, setPostUpdate }) => {
  const [deleteUser] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }, "GetPosts"],
  });

  const deleteHandler = () => {
    deleteUser({
      variables: {
        post: {
          id: post.id,
          time: post.time,
          text: post.text,
          name: post.name,
          username: post.username,
        },
      },
    });
  };

  return (
    <div className="post-container">
      <div className="profile-pic">
        <img style={imageStyle} src={link} alt="Not found" />
      </div>
      <div className="post-box">
        <button className="cross-button" onClick={deleteHandler}>
          <IoClose />
        </button>
        <div className="user-info">
          <div>{post.name}</div>
          <div>{`@${post.username}`}</div>
          {/* <div>·</div> */}
        </div>
        <div className="post-content">
          <div>Created at: {post.time}</div>
          <p>{post.text}</p>
        </div>
        <div className="button-group">
          <button className="button" onClick={() => setPostUpdate({ ...post })}>
            <FiEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

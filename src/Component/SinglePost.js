import React from "react";
import { Link } from "react-router-dom";

function SinglePost(props) {
  const { body, id, title, userId } = props.post;

  console.log(props.users);

  return (
    <div>
      <h4>
        {title} By----{" "}
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`home/${userId}`}
        >
          {props?.users[userId]?.name}
        </Link>
      </h4>
      <p>{body}</p>
    </div>
  );
}

export default SinglePost;

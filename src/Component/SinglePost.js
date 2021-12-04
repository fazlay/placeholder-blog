import React from "react";
import { Link } from "react-router-dom";

function SinglePost({ post }) {
  const { body, id, title, userId } = post;
  return (
    <div>
      <h4>
        {title} By----{" "}
        <Link style={{ display: "block", margin: "1rem 0" }} to={`${userId}`}>
          {userId}
        </Link>
      </h4>
      <p>{body}</p>
    </div>
  );
}

export default SinglePost;

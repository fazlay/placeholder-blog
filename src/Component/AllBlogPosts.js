import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=5&_limit=15")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>this is All Blog POST</h1>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default AllBlogPosts;

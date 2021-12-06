import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=5&_limit=15")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-red-900 underline font-extrabold pt-4"> - - BOLG XPRESS - -</h1>
      

      {posts.map((post) => (
        <SinglePost key={post.id} post={post} users={users}></SinglePost>
      ))}
    </div>
  );
};

export default AllBlogPosts;

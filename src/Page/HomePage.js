import React from "react";
import { useEffect } from "react/cjs/react.development";
import AllBlogPosts from "../Component/AllBlogPosts";
import useAuth from "../hook/useAuth";
import Header from "./Header";

const HomePage = () => {
  const {getUserInfo,newUser} = useAuth()
  useEffect(()=>{
    getUserInfo()
  },[])
  console.log(newUser);
  return (
    <div>
     
      <AllBlogPosts></AllBlogPosts>
    </div>
  );
};

export default HomePage;

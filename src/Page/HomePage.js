import React, { useEffect } from "react";

import AllBlogPosts from "../Component/AllBlogPosts";
import useAuth from "../hook/useAuth";


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

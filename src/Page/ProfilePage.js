import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const [author, setAuthor ]= useState({})
  let params = useParams();
  console.log(params);
  let url = `https://jsonplaceholder.typicode.com/users/${params.userprofile}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{setAuthor(data)
      console.log(data)});
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center py-4">HEY! This is <span className="font-bold">{author?.name}</span> </h1>
      <div className="text-center mx-auto ">
      <h1 className="text-xl">Email : <span className="font-light">{author?.email}</span> </h1>
      <h1 className="text-xl">Phone : <span className="font-light">{author?.phone}</span> </h1>
      <h1 className="text-xl">Website : <span className="font-light">{author?.website}</span> </h1>
      </div>
    </div>
  );
};

export default ProfilePage;

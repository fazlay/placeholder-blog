import React, { useEffect } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  let params = useParams();
  let url = `https://jsonplaceholder.typicode.com/users/${params.userprofile}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>This is Personal Profile {params.userprofile}</h1>
    </div>
  );
};

export default ProfilePage;

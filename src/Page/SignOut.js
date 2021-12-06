import React from "react";
import useAuth from "../hook/useAuth";

const SignOut = () => {
  const {locSignOut}= useAuth()
  const handleSignOut = () => {
    locSignOut()
  };

  return (
    <div className="py-5">
      <h1 className="py-8 text-3xl">Sign Out From Here  </h1>
      <button className="bg-green-700 text-white text-xl font-bold px-5 py-2" onClick={handleSignOut}>SIGNOUT</button>
    </div>
  );
};

export default SignOut;

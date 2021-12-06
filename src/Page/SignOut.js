import React from "react";

const SignOut = () => {
  const handleSignOut = () => {
    window.localStorage.clear();
  };

  return (
    <div>
      <h1>This is SignOut </h1>
      <button onClick={handleSignOut}>SIGNOUT</button>
    </div>
  );
};

export default SignOut;

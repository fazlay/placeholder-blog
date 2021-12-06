import React from "react";

const SignIn = () => {
  let userInfo = {
    email: "",
    password: "",
  };
  const handleChange = (e) => {
    userInfo[e.target.name] = e.target.value;
    console.log(userInfo);
  };
  const handleSubmite = (e) => {
    console.log(userInfo);
    window.localStorage.setItem("person", JSON.stringify(userInfo));
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmite}>
        <h1>THIS IS SIGN IN FORM</h1>
        <span>
          Enter your Email : {"  "}
          <input
            type="email"
            name="email"
            className="border-2"
            onChange={handleChange}
          />
        </span>
        <br />
        <span className="mt-3">
          Enter your Email : {"  "}
          <input
            type="password"
            name="password"
            className="border-2"
            onChange={handleChange}
          />
        </span>
        <button type="submit">Submit info</button>
      </form>
    </div>
  );
};

export default SignIn;

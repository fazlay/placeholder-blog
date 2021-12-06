import React from "react";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
    const {locSignIn,newUser,getUserInfo} =useAuth()
  let userInfo = {
    email: "",
    password: "",
  };
  const handleChange = (e) => {
    userInfo[e.target.name] = e.target.value;
    console.log(userInfo);
  };
  const handleSubmite = (e) => {
  
    locSignIn(userInfo)
    getUserInfo()
    navigate("/")
    e.preventDefault();
  
  };
 
  return (
    <div>
     
      <form onSubmit={handleSubmite}>
     
        <h1 className="text-2xl font-bold py-3">Sign In Here</h1>
        <span className="text-red-700"> *Enter any Email and Password </span>
        <span className="py-3 block">
          Enter your Email : {"  "}
          <input
           placeholder=" Email"
            type="email"
            name="email"
            className="border-2"
            onChange={handleChange}
          />
        </span>
        <br />
        <span className="mt-3" className="pb-9 block">
          Enter your Password : {"  "}
          <input
          placeholder=" Passowrd"
            type="password"
            name="password"
            className="border-2"
            onChange={handleChange}
          />
        </span>
        <button className="bg-green-700 font-bold text-white px-8 py-2" type="submit" >Submit info</button>
      </form>
    </div>
  );
};

export default SignIn;

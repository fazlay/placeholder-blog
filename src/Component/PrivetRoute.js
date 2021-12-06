import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {

  const {newUser }= useAuth()
  
  let location = useLocation();
  //   if (isLoading) {
  //     return <CircularProgress />;
  //   }
  console.log(newUser);
  if (newUser?.email) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;

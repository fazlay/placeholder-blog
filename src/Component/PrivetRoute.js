import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = { email: "" };
  let location = useLocation();
  //   if (isLoading) {
  //     return <CircularProgress />;
  //   }
  if (user.email) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;

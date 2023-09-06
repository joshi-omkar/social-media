import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { userToken } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <>
      {userToken ? children : <Navigate to="/login" state={{ from: location }} />}
    </>
  );
};

export default RequireAuth;

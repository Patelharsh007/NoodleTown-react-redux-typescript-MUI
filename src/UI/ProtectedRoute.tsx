import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/Store";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authUser = useSelector((state: RootState) => state.auth.authUser);

  // Safely check if authUser is defined
  if (!authUser || !authUser.isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

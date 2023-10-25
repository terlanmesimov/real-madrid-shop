import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../utils/AuthContext";

const PrivateRoutes = () => {
  const { hasToken } = useContext(Auth);
  return hasToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

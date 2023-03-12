import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/userContext";

export const PrivateRoutes = () => {
  const { user, isLoadingUser } = useContext(UserContext);
  const isAuth = user != null && !isLoadingUser;
  return isAuth ? <Outlet></Outlet> : <Navigate to="/" />;
};

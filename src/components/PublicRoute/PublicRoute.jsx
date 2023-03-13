import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { HomePageUrl } from "../../constants/urls";

export function PublicRoute({ children }) {
  const { user, isLoadingUser } = useUserContext();

  if (isLoadingUser) {
    return <h1>LOADING USER...</h1>;
  }

  if (!isLoadingUser && user) {
    return <Navigate to={HomePageUrl} />;
  }

  return children;
}
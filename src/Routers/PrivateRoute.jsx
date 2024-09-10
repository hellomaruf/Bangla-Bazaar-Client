import { useContext } from "react";
import { AuthContaxt } from "../Services/AuthProvider";
import Spinner from "../Utils/Spinner";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContaxt);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <Spinner />;
  }
  return <Navigate to="/signin" state={location.pathname} replace="true" />;
}

export default PrivateRoute;

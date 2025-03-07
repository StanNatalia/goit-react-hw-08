import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;

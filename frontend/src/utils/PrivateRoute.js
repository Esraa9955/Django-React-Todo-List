import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {user ? children : <Navigate to="/login" replace />}
    </Route>
  );
};

export default PrivateRoute;
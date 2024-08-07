import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user || user.role !== "Admin") {
    console.log("Usuario no autorizado, redirigiendo a Home");
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default Protected;

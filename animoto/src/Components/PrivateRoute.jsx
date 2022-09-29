import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  
 return state.isAuth ? children : <Navigate to="/login" />;
  
};

export default PrivateRoute;

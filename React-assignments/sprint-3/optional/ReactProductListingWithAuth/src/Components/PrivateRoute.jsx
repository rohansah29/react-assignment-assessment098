import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {authState}=useContext(AuthContext);
  const {isAuth}=authState;

    if(!isAuth){
        return <Navigate to="/login"/>
    }

    return children;
}

export default PrivateRoute;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthProvider);
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;

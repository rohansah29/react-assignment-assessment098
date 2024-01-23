import { createContext, useState } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth]=useState(false);
    const [token,setToken]=useState(null);

    const login=()=>{
        setIsAuth(true);
    }
    const logout=()=>{
        setIsAuth(false);
        setToken(null);
    }
    return <AuthContext.Provider value={{isAuth,login,logout,setIsAuth,token,setToken}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;

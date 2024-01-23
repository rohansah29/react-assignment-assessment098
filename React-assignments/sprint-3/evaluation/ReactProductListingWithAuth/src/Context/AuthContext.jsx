import { createContext,useState } from "react";

export const AuthProvider = createContext();
function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState("");
    


return <AuthProvider.Provider value={{isAuth,setIsAuth,token,setToken}} >{children}</AuthProvider.Provider>
}

export default AuthContextProvider;

import React, {useState, createContext} from 'react'
import App from '../App';

export const AuthContext=createContext();

export default function AuthContextProvider({children}) {

  const [isAuth,setIsAuth]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [token,setToken]=useState("");

  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,loading,setLoading,error,setError,token,setToken}}>
      <App/>
    </AuthContext.Provider>
  )
}

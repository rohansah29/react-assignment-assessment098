import React, {useState} from 'react'
import { createContext } from 'react'
import App from '../App';

export const AuthContext = createContext();

export default function AuthContextProvider() {

const [isAuth,setisAuth] = useState(false);
const [loading,setLoading] = useState(false);
const [err,setErr] =useState(null);
const [token,setToken] = useState("")



  return (
    <AuthContext.Provider value={{isAuth,setisAuth,loading,setLoading,err,setErr,token,setToken}}><App/></AuthContext.Provider>
  )
}

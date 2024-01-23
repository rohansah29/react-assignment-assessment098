import React from 'react'
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard'
import { AuthContext } from './Context/AuthContextProvider'
import { useContext } from 'react'


export default function App() {
const {isAuth} =useContext(AuthContext);
  return (
    <div>
      {!isAuth?<Login />:<Dashboard/>}
    </div>
  )
}

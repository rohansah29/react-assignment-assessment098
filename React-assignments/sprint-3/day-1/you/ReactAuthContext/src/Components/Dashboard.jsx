import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';

export const Dashboard = () => {
    const {token,setIsAuth}=useContext(AuthContext);
    const handleClick=()=>{
        setIsAuth(false)
    }
    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={handleClick} >LOGOUT</button>
        </div>
    )
}

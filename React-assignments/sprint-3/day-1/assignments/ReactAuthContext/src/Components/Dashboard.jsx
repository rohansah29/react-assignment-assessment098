import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';

export const Dashboard = () => {
    const {token,setisAuth}=useContext(AuthContext);
    const btnClick=()=>{
        setisAuth(false);
    }
    return (
        <div >
            <h3 data-testid = "token" >Token: {token} </h3>
            <button data-testid = "logout" onClick={btnClick} >LOGOUT</button>
        </div>
    )
}

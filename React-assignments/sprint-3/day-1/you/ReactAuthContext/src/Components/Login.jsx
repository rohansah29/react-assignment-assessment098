import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'

const initialState = {
    email: "",
    password: "",
  };

export default function Login() {

    const {setIsAuth,setLoading,setError,token,setToken}=useContext(AuthContext);
    const [formData,setFormData]=useState(initialState);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.type]:e.target.value})
    }
    // console.log(formData);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            let res=await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(formData)
        })
        let data=await res.json();
        // console.log(data.token);
        setToken(data.token)
        setIsAuth(true);
        setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
          console.log(error);  
        }
    }
    
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={handleChange}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={handleChange}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}

import  { AuthContext } from "../Context/AuthContextProvider";
import {useContext,useState} from "react";
import { Navigate } from "react-router-dom";

const initialState={
    email:"",
    password:""
}

export default function Login() {
    const [formData,setFormData] = useState(initialState);
    const [token,setToken] = useState("");
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const update=async()=>{
        const res=await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData),
        })
        let data = await res.json();
        // console.log(data);
        setToken(data.token);
    }
    if(token!=""){
        setIsAuth(true);
    }

    if(isAuth){
        return <Navigate to="/" />
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.className]: e.target.value});
        console.log(formData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        update();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={handleChange}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={handleChange}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const initialState={
  email:"",
  password:""
}

function Login() {

  const [formData,setFormData]=useState(initialState);
  const [isDisabled,setIsDisabled]=useState(false);
  const {authState,loginUser,logoutUser}=useContext(AuthContext);
  const {token,isAuth}=authState;

  const check=async()=>{
    setIsDisabled(true)
    let res=await fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    let data=await res.json();
    // console.log(data.token);
    loginUser(data.token)
  }
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"

if(isAuth){
  return <Navigate to="/dashboard"/>
}
  
const handleChange=(e)=>{
  setFormData({...formData,[e.target.type]:e.target.value})
  console.log(formData);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  check();
}

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={isDisabled}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;

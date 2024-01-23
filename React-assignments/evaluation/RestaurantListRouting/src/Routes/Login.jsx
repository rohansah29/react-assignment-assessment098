import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const initialState={
  email:"",
  password:""
}

function Login() {
  const [formData,setFormData]=useState(initialState);
  const {isAuth,setIsAuth,setToken,token}=useContext(AuthContext);

  const update=async()=>{
    const res=await fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    })
    let data=await res.json();
    console.log(data);
    setToken(data.token);
  }

  if(token!=null){
    setIsAuth(true);
  }
  if(isAuth){
    return <Navigate to="/" />;
  }

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.className]:e.target.value});
    console.log(formData);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    update();
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" className="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              className="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

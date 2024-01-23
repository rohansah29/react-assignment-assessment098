import { Link, Navigate } from "react-router-dom";
import { useState,useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

const initialData={
  email:"",
  password:""
}

function Login() {
  const [formData,setFormData] = useState(initialData);
  // const [token,setToken] = useState("");
  const [loading,setLoading] = useState(false)
  const {isAuth,setIsAuth,token,setToken} = useContext(AuthProvider);

  const formCheck=async()=>{
    setLoading(true);
    const res=await fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData),
    })
    let data=await res.json();
    setToken(data.token);
    setLoading(false);
  }

  console.log(token);
  if(token=="QpwL5tke4Pnpja7X4"){
    setIsAuth(true);
  }

  if(isAuth){
    return <Navigate to="/dashboard" />
  }


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    formCheck();
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" name="email" placeholder="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={loading}>
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

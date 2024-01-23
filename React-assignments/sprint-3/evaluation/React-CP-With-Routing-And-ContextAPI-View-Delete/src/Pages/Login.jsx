import {useState} from "react";
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom"

const initialState={
  email:"",
  password:""
}

const Login = () => {
  const [formData,setFormData]=useState(initialState);
  const [nav,setNav]=useState(false);

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.type]:e.target.value})
  };

  const fetchUserData=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`);
    let data=await res.json();
    let filterData=data.filter((el)=>el.email==formData.email && el.password==formData.password);
    if(filterData.length>0){
      setNav(true);
    }else{
      setNav(false);
    }
  }

  if(nav){
    return <Navigate to="/problems"/>
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchUserData();
  };
  return (
    <div data-testid="login">
      <form data-cy="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input data-cy="login-email" type="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input data-cy="login-password" type="password" onChange={handleChange} />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div data-cy="go-to-problems-page">
        {/* Add a Link tag here with textContent `Problems` after `Go to` and on clicking it we will be redirected to Problems */}
        Go to <Link to="/problems">Problems</Link>
      </div>
    </div>
  );
};

export default Login;

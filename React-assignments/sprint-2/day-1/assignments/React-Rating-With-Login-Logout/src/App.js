import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/login/Login";
import React from "react";


const App = () => {
  const [username,setUserName]= React.useState("");
  const [password,setPassword]= React.useState("");
  const [auth,setAuth]= React.useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
      username:username,
      password:password
    }
    
    if("admin"===obj.username && "1234"===obj.password){
      setAuth(true);
    }
  };

  return (
    <div className="App">
      {/* Either Dashboard or Login component should be visible at a time */}
      {auth?<Dashboard setAuth={setAuth} />:
      <Login setUserName={setUserName} setPassword={setPassword} handleSubmit={handleSubmit}/>}
    </div>
  );
};

export default App;

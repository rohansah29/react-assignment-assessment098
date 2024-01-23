import { useState } from "react";
import Login from "./Components/Login";
import Notices from "./Components/Notices";

const initialData={
  username:"",
  password:""
}

export default function App() { 
  const [formData,setFormData] = useState(initialData);
  const [data,setData] = useState(false);
  const [msg,setMsg] = useState(false);
  const [username,setUserName] = useState("");
  const [userId,setUserId] = useState("");

  const logIn=()=>{
    let res=fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`).then((res)=>{
      return res.json();
    }).then((data)=>{
      let filteredData=data.filter((item)=>formData.username==item.username && formData.password==item.password)
      console.log(filteredData);
      if(filteredData.length>0){
        setData(true);
        setMsg(false);
        setUserName(filteredData[0].username);
        setUserId(filteredData[0].id);
        console.log(filteredData[0].username);
      }else{
        setMsg(true);
      }
    })
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    logIn();
    console.log(formData);
  }

  const logout=()=>{
    setData(false);
  }

  return (
    <div className='App'>
      {/* Either login or Notices Components will be visible at a time */
      data?<Notices username={username} userId={userId} logout={logout}/>:<Login handleChange={handleChange} handleSubmit={handleSubmit} msg={msg}/>
      }   
    </div>
  )
}

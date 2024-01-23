import Login from "./Components/Login";
import { useState } from "react";
import Notices from "./Components/Notices";

const initialData={
  username:"",
  password:""
}
export default function App() { 
  
  const[formData,setFormData] = useState(initialData);
  const[data,setData] = useState(false);
  const[noti,setNoti] = useState(false);
  const [username,setUserName] = useState("");

  const logIn=()=>{
    let res= fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`).then((res)=>{
      return res.json();
    }).then((data)=>{

    
    // let data= res.json();
    console.log(data);
    data.map((item)=>{
      if(formData.username==item.username && formData.password==item.password){
        setData(true);
        setNoti(false);
        setUserName(item.username);
        // alert("login successfully!")
      }else{
        setNoti(true);
      }
    })
    });
    // console.log(dataArr);
  }


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value});
    console.log(formData);
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  logIn();
}

const logout=()=>{
  setData(false);
}


  return (
    <div className='App'>
      {/* Either login or Notices Components will be visible at a time */
      data?<Notices username={username} logout={logout}/>:<Login handleChange={handleChange} handleSubmit={handleSubmit} noti={noti}/>
      }      
    </div>
  )
}

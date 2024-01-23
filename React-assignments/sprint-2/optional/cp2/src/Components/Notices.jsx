import Notice from "./Notice";
import { useState,useEffect } from "react";

const Notices = ({username,logout,userId}) => {
  const [data,setData] = useState([]);
  const [category,setCategory] = useState("");
  const [date,setDate] = useState("");
  const [btn,setBtn] = useState(false);
  const [title,setTitle] = useState("");
  const [message,setMassege] =useState("");
  const [postdate,setPostDate] =useState("");
  const [option,setOption] = useState("");

  let fetchAndRender=async()=>{
    let url=``;
    if(category && category!="all"){
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notices?category=${category}&_sort=date&_order=desc`
    }else if(date){
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notices?date=${date}&_sort=date&_order=desc`
    }else{
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notices?_sort=date&_order=desc`;
    }
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    setData(data);
  }
  useEffect(()=>{
    fetchAndRender();
  },[category,date])

  const handleChange=(e)=>{
    setCategory(e.target.value);
  }
  const handleChangeDate=(e)=>{
    setDate(e.target.value);
  }
  console.log(date)

  const handleSubmit=async(e)=>{
    let obj={
      category:option,
      date:postdate,
      message:message,
      title:title,
      author_id:userId
    }
    e.preventDefault();
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notices`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(obj)
    })
    let daata=await res.json();
    console.log(daata);
    fetchAndRender();
  }

  return (
    <div>
      <div>
        <h1>Notice Board</h1>
        {/* add welcome message here */}
        <p data-testid="welcomemessage">Hi {username}, Welcome!</p>
        {/* logout button */}
        <button data-testid="logout" onClick={logout}>Logout</button>
        <div>
          <label>Date Filter:</label>
          <input data-testid="filter-date" type="date" onChange={handleChangeDate} />
        </div>
        <div>
          <label>Category Filter:</label>
          <select data-testid="category-filter" onChange={handleChange}>
            <option value="all">Select an option</option>
            <option value="Announcement">Announcement</option>
            <option value="Event">Event</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>
        <div>
          {/* button should have either "Hide Form" or "Add Notice" as text content */}
          <button data-testid="addnotice-btn" onClick={()=>setBtn(!btn)}>{btn?"Hide Form":"Add Notice"}</button>
          {/* Below form should be visible only when appropriate button is clicked */
          btn?<form data-testid="addpost" onSubmit={handleSubmit}>
          <label>Title: </label>
          <input type="text" data-testid="title" onChange={(e)=>setTitle(e.target.value)}></input>
          <br></br>
          <label>Message: </label>
          <input type="text" data-testid="message" onChange={(e)=>setMassege(e.target.value)}></input>
          <br></br>
          <label>Date: </label>
          <input type="date" data-testid="date" onChange={(e)=>setPostDate(e.target.value)}></input>
          <br></br>
          <select data-testid="category" onChange={(e)=>setOption(e.target.value)}>
            <option value="--">Select an option</option>
            <option value="Announcement">Announcement</option>
            <option value="Event">Event</option>
            <option value="Meeting">Meeting</option>
          </select>
          <br></br>
          <input type="submit" />
        </form>:""
          }
        </div>
      </div>
      <ul>
        {/* render your notice components wrapped in li tags here*/
         data.map((el)=>(
          <li key={el.id}>
          <Notice title={el.title} date={el.date} message={el.message} category={el.category} author_id={el.author_id} />
        </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Notices;

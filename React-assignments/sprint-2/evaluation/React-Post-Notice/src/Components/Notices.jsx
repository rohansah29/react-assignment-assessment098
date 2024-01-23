import Notice from "./Notice";
import { useState,useEffect } from "react";

const formData={
  title:"",
  message:"",
  date:"",
  category:""
}
const Notices = ({username,logout}) => {
  const [data,setData] = useState([]);
  let fetchAndRender=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/notices`);
    let data=await res.json();
    console.log(data);
    setData(data);
  }
  useEffect(()=>{
    fetchAndRender();
  },[])
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
          <input data-testid="filter-date" type="date" />
        </div>
        <div>
          <label>Category Filter:</label>
          <select data-testid="category-filter">
            <option value="all">Select an option</option>
            <option value="Announcement">Announcement</option>
            <option value="Event">Event</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>
        <div>
          {/* button should have either "Hide Form" or "Add Notice" as text content */}
          <button data-testid="addnotice-btn">{}</button>
          {/* Below form should be visible only when appropriate button is clicked */}
          <form data-testid="addpost">
            <label>Title: </label>
            <input type="text" data-testid="title"></input>
            <br></br>
            <label>Message: </label>
            <input type="text" data-testid="message"></input>
            <br></br>
            <label>Date: </label>
            <input type="date" data-testid="date"></input>
            <br></br>
            <select data-testid="category">
              <option value="--">Select an option</option>
              <option value="Announcement">Announcement</option>
              <option value="Event">Event</option>
              <option value="Meeting">Meeting</option>
            </select>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
      <ul>
        {/* render your notice components wrapped in li tags here*/
        data.map((el)=>(
          <li>
          <Notice title={el.title} date={el.date} message={el.message}/>
        </li>
        ))
        }

        
        
      </ul>
    </div>
  );
};

export default Notices;

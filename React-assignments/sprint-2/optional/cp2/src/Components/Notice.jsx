import { useState,useEffect } from "react";

const Notice = ({message,title,date,category,author_id}) => {

  const [name,setName]=useState("");

  let getAuther=async(id)=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users/${author_id}`);
    let data=await res.json();
    setName(data.username);
  }
  useEffect(()=>{
    getAuther();
  },[])

  return (
    <div className="notice-container">
      {/* In below h3 tag, the text content should be title and inside the span tag the text content should be category */}
      <h3 className='notice-title'>{title}<span>{category}</span></h3>
       {/* In below p tag, the text content should be message and inside the span tag the text content should be authorname who posted it */}
      <p className='notice-message'>{message}<span>- {name}</span></p>
      {/* add date of the post in below p tag */}
      <p className='notice-date'>{date}</p>
    </div>
  )
}

export default Notice;
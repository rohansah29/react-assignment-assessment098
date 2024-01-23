import React, { useState } from 'react'
import axios from 'axios';

export default function Dashboard() {

  const [data,setData] = useState([]);
  const [idi,setIdi] = useState('');

  const handleChange=(e)=>{
    // console.log(e.target.value);
    if(idi){
      clearTimeout(idi)
    }
    
     let id = setTimeout(()=>{
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?q=${e.target.value}`)
      .then((data)=>{
        // console.log(data.data)
        setData(data.data)
      })
    },1000)
    setIdi(id)
  }

  // console.log(data)
  
  return (
    <div>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movies"
          onChange={(e)=>{
            handleChange(e)
          }}
      />
      <div data-testid = "movie_results" >
        {/* Add movie results based of search key here */}
        {
          data.map((ele)=>(
            <div className='movie-card' key={ele.id}>
            <h3>Title : {ele.title}</h3>
            <p>Year : {ele.year}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
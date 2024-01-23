import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {
  const [data,setData] = useState([]);
  const fetchData=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data=await res.json();
    console.log(data);
    setData(data);
  }
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchData}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */
        data.map((item)=>(
          <Post title={item.title} body={item.body}/>
        ))
        }
      </div>
    </div>
  );
}

export default App;

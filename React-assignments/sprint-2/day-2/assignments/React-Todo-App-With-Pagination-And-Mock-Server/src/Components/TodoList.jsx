import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";
import AddTodo from "./AddTodo";

function TodoList() {
  const  [input,setInput]=useState("");
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(false);
  const [limit,setLimit]=useState(3);
  const [page,setPage]=useState(1);
  const [totalBtn,setTotalBtn]=useState(0);

  const fetchAndRender=async()=>{
    try {
      setLoading(true);
      let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos?_limit=${limit}&_page=${page}`);
      let data=await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
      setErr(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
      console.log(error);
    }
  }
  const total=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`);
    let data=await res.json();
    // console.log(data.length);
    setTotalBtn(Math.ceil(data.length/limit));
  }

  useEffect(()=>{
    fetchAndRender();
    total();
  },[limit,page])

  const handleToggle=(id)=>{
      const putData=data.filter((el)=>el.id===id);
      console.log(putData[0]);
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({...putData[0],status:!putData[0].status})
    }).then(()=>{
      console.log("ToDo Updated")
      fetchAndRender();
    })
  }
  const handleDelete=(id)=>{
    // const filteredData=data.filter((el)=>el.id!==id);
    // setData(filteredData);
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`,{
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    }).then(()=>{
      console.log("ToDo Deleted")
      fetchAndRender();
    })
  };

  const handleAddTodo=()=>{
    let obj={
      "status": false,
      "title": input
}
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj)
    }).then(()=>{
      console.log("ToDo Added")
      fetchAndRender();
    })
  }
  return (
    <>
      {/* Add select tag here for selecting the total no. of todos to be displayed */}
      <select name="" id="" onChange={(e)=>setLimit(e.target.value)}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>

      {/* Add AddTodo component here */}
      <AddTodo handleAddTodo={handleAddTodo} input={input} setInput={setInput}/>

      {loading?<h1 data-testid="loading">Loading...</h1>:null}
      {err?<h1 data-testid="err">Something went wrong..</h1>:null}

      {/* Add all the todos here with the help of TodoItem component */}
      {data.map((el)=>(
        <TodoItem key={el.id} {...el} handleDelete={handleDelete} handleToggle={handleToggle}/>
      ))}

      {/* Add Pagination component here */}
      <br />
      <Pagination page={page} setPage={setPage} totalBtn={totalBtn}/>
    </>
  );
}

export default TodoList;

import Container from "../common/container/Container";
import AddTodo from "./AddTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [data,setData]=useState([]);
  const [inputData,setInputData]=useState("")

  const handleChange=(e)=>{
    setInputData(e.target.value);
  };

  const handleSubmit=()=>{
    const initialObj={ 
      id: Math.floor(Math.random() * 100),
      title: inputData,
      status: false 
      }
      const updatedData=[...data,initialObj]
      setData(updatedData);
  };

  const handleToggle=(id)=>{
    const temp=data.map((el)=>el.id===id?{...el,status:!el.status}:el);
    setData(temp);
  }
  
  const handleDelete=(id)=>{
    const remove=data.filter((el)=>el.id!=id);
    setData(remove);
  }


  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      {/* Add AddTodo component here */
      <AddTodo handleChange={handleChange} handleSubmit={handleSubmit}/>
      }
      <ul>
        {/* map all the todo's here with the help of TodoItem component */
        data.map((el)=>(
          <TodoItem key={el.id} id={el.id} title={el.title} status={el.status} handleToggle={handleToggle} handleDelete={handleDelete}/>
        ))
        }
      </ul>
    </Container>
  );
}

export default TodoList;

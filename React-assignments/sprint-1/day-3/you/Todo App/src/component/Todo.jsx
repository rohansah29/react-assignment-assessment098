
import React from "react";
import AddTodo from "./AddTodo";
import Todoitem from "./Todoitem";

export default function Todo(){
  
  const [todos, setTodos]= React.useState([])

const handleClick=(inputVal)=>{
  const todoItem={
    id: Math.random() + inputVal + Date.now(),
    title:inputVal,
    status:false
  };
  
const updatedTodos=[...todos,todoItem];
setTodos(updatedTodos);
};
console.log(todos);



const handleToggle=(id)=>{
const updateStatus=todos.map((el)=>{
    if(el.id===id){
        return {...el,status: !el.status};
    }else{
        return el;
    }
})
setTodos(updateStatus);
}


const handleDelete=(id)=>{
    const del=todos.filter((el)=>{
        if(el.id===id){
           return false;
        }else{
            return true;
        }
    })
    setTodos(del)
}

  return (
    <div>
     <div>
      <AddTodo handleClick={handleClick}/>
      <div>
      {todos.map((el)=>(
        <Todoitem status={el.status} title={el.title} id={el.id} handleToggle={handleToggle} handleDelete={handleDelete}/>
      ))}
      </div>
     </div>
    </div>
  )
}




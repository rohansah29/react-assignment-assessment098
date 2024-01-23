import React from "react";


function AddTodo({handleClick}){
    const [inputVal,setInputVal] = React.useState("");
    return(
        <div>
      <input placeholder="ADD TODO" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
      <button onClick={()=>{
        handleClick(inputVal);
        setInputVal("");
      }}>ADD TODO</button>
      </div>
    )
}

export default AddTodo;
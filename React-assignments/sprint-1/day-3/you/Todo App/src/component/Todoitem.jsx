function Todoitem({status,title,id,handleToggle,handleDelete}){
    const ToggleButtonClicked=()=>handleToggle(id);
    return(
        <div style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
          <p>{title}-{status ? "Completed" : "Not Completed"}</p>
          <button onClick={ToggleButtonClicked}>Toggle</button>
          <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Todoitem;
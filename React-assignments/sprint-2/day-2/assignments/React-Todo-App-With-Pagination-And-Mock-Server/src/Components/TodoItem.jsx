function TodoItem({status,title,id,handleToggle,handleDelete}) {
  return (
    <div data-testid="todo-item">
      {/* Add title,status of todo in p tags and TOGGLE, DELETE in buttons */}
      <p>{title}</p>
      <p>{status?"Completed":"Not Completed"}</p>
      <button onClick={()=>handleToggle(id)}>TOGGLE</button>
      <button onClick={()=>handleDelete(id)}>DELETE</button>
    </div>
  );
}

export default TodoItem;

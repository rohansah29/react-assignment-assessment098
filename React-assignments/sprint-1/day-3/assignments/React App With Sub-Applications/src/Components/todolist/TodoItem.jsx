import Button from "../common/button/Button";
import style from "../todolist/TodoItem.module.css"

function TodoItem({id,title,status,handleToggle,handleDelete}) {
  return (
    <div data-testid="todo-item" className={style.wrapper}>
      {/* Add the p tag, and required elements */}
      <p>{title}-{status?"Completed":"Not Completed"}</p>
      <div>{/* add the required buttons here using Button component */}
      <Button text="TOGGLE" onClick={()=>handleToggle(id)}/>
      <Button text="DELETE" onClick={()=>handleDelete(id)}/>
      </div>
    </div>
  );
}

export default TodoItem;

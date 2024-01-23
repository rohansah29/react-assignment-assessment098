import Button from "../common/button/Button";
import style from "../todolist/AddTodo.module.css";

function AddTodo({handleSubmit,handleChange}) {
  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input type="text" placeholder="Add a new todo" className={style.input} onChange={handleChange} />
      <Button text="ADD" onClick={handleSubmit}/>
    </div>
  );
}

export default AddTodo;

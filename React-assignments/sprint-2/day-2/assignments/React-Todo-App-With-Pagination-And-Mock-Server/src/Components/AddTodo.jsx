function AddTodo({input,setInput,handleAddTodo}) {
  return <div data-testid="add-todo">{/* Add input tag and a button */}
  <input placeholder="ADD TODO" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleAddTodo}>ADD TODO</button>
  </div>;
}

export default AddTodo;

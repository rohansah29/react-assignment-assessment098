import React, { useReducer } from "react";
import axios from "axios";

const initialData = {
  title: "",
  status: false,
};
const reduceData = (state, { type, payload }) => {
  switch (type) {
    case "todo_input": {
      return { ...state, title: payload };
    }
    case "reset": {
      return initialData;
    }
    default: {
        throw new Error(`Action type ${type} is invalid`);
      }
  }
};

const TodoInput = ({fetchAndRender}) => {
  const [state, dispatch] = useReducer(reduceData, initialData);
  const {title,status}=state;

  const handleClick = () => {
    axios({
        baseURL:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
        url:`/todos`,
        method:"post",
        data:state
      }).then(()=>{
        console.log("Added");
        fetchAndRender();
      })
  };

  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        onChange={(e) => {
          dispatch({ type: "todo_input", payload: e.target.value });
        }}
      />
      <button data-testid="add-button" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;

import { useEffect, useReducer } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  err: false,
};

const reduce = ((state, { type, payload }) => {
  switch (type) {
    case "fetch_loading": {
      return {
        loading: true,
        data: [],
        err: false,
      };
    }
    case "fetch_success": {
      return {
        loading: false,
        data: payload,
        err: false,
      };
    }
    case "fetch_error": {
      return {
        loading: false,
        data: [],
        err: true,
      };
    }
    default:{
      throw new Error(`Invalid action type ${type}`);
    }
  }
});

const Todos = () => {
  const [state, dispatch] = useReducer(reduce,initialState);

  const fetchAndRender = () => {
    dispatch({type:"fetch_loading"});
    axios({
      baseURL:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
      url:`/todos`,
      method:"get"
    }).then((res)=>{
      const data=res.data;
      console.log(data);
      dispatch({type:"fetch_success",payload:data});
    }).catch(()=>{
      dispatch({type:"fetch_error"});
    })
  };

  useEffect(() => {
    fetchAndRender();
  }, []);

  const {data}=state;

  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput fetchAndRender={fetchAndRender} />
      {/* map through the todos array and display the tasks */
      <div  data-testid = "todos-wrapper">
        {data.map((el)=>(
          <p>{`${el.title}-${el.status?"True":"False"}`}</p>
        ))}
      </div>
      }
      
    </div>
  );
};

export default Todos;

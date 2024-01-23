import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "email":{
      return {...state,email:action.payload};
    }
    case "password":{
      return {...state,password:action.payload};
    }
    case "RESET_VALUES":{
      return initialState;
    }
    default:{
      return initialState;
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState(initialState);
  const [state,dispatch] = useReducer(reducer,initialState);
  // const [blank,setBlank] = useState("");
  // const {email,password} = state;

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedData(state);
    dispatch({type:"RESET_VALUES"});
  }

  console.log(submittedData);

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={handleSubmit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" value={state.email} onChange={(e)=>dispatch({type:"email",payload: e.target.value})} />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" value={state.password} onChange={(e)=>dispatch({type:"password",payload: e.target.value})} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
     {(submittedData.email=="" && submittedData.password=="")?
        <div data-testid="no-details-container">No details found</div>:
        <div>
        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>}
      
      

      
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };

import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [btn,setbtn]= useState(false);
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setbtn(!btn)}>{btn?"Show Fictional Books":"Show Non-Fiction Books"}</button>

      <div data-testid="conditional-container">
        {btn?<NonFiction/>:<Fiction/>}
        
      </div>
    </div>
  );
}

export default App;

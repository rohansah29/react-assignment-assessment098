import "./App.css";
import db from "./db.json"
import UserDetails from "./components/UserDetails";
import { useState } from "react";
// import data from db.json

function App() {
  const [data,setData]=useState(db);

  const ascBtn=()=>{
  let currentData=data;
    currentData.sort((a,b)=>{
      let fa= a.first_name.toLowerCase()
      let fb = b.first_name.toLowerCase()
    
          if (fa < fb) {
            return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
      })
      setData(currentData.slice())
      console.log(currentData);
  }


  const descBtn=()=>{
   let currentData=data;
    currentData.sort((a,b)=>{
      let fa= a.first_name.toLowerCase()
      let fb = b.first_name.toLowerCase()
    
          if (fa < fb) {
            return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
      })
      setData(currentData.slice())
  }
  return (
    <div className="App" data-testid = 'app'>
      <button onClick={ascBtn} data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button onClick={descBtn}  data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {
        data.map((el)=>(
          <UserDetails {...el} />
         ))
      }
    </div>
  );
}

export default App;

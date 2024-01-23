import React, { useState } from "react";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {
  const [data,setData] = useState([]);

  const handleFetch=async()=>{
    try {
      let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`);
      let data=await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
console.log(data);
  return <>
  
  <button onClick={handleFetch}>Get Coffee</button>
    <div className="coffee_container">{/* map coffee into coffee card */}
    {data.map((el)=>(
      <CoffeeCard className="ingredient" key={el.id} {...el}/>
    ))}
    </div>
  </>
};

export default Coffee;

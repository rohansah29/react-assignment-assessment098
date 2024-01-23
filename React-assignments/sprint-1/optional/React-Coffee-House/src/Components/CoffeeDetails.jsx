import React, { useState } from "react";
import CoffeeItem from "./CoffeeItem";

const CoffeeDetails = () => {
  const [data,setData]=useState([]);
  const [btn,setBtn]=useState(false);
  const [total,settotal]=useState(0);

  const handleFetch=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`);
    let data= await res.json();
    console.log(data?.data);
    setData(data?.data);
    setBtn(true);
  }
const handleOrder=(id)=>{
  let filterData=data.filter((el)=>el.id==id);
  console.log(filterData[0].price);
  settotal(total+filterData[0].price)
}
const handleCancelOrder=(id)=>{
  let filterData=data.filter((el)=>el.id==id);
  console.log(filterData[0].price);
  settotal(total-filterData[0].price)
}

  return (
    <div>
      <h1>Coffee House</h1>
      {btn?
      <div>
      {(total!=0)?<h6>{`Total cost:${total}`}</h6>:null}
      <div data-cy="container">
        {data.map((el)=>(
          <CoffeeItem key={el.id} handleOrder={handleOrder} handleCancelOrder={handleCancelOrder} {...el}/>
        ))}
      </div>
      </div>:<button className="get-coffee" onClick={handleFetch}>Get Coffee</button>}
    </div>
  );
};

export default CoffeeDetails;

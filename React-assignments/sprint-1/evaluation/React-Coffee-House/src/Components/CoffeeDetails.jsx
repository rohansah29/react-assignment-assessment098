import React, { useEffect } from "react";
import CoffeeItem from "./CoffeeItem";

const CoffeeDetails = () => {

const [items,setitems]= React.useState([]);

  // const fetchData=async()=>{
  //   try {
  //     let req=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee");
  //   let data=await req.json();
  //   // console.log(data);
  //   setitems(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const fetchData=useEffect(()=>{
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee")
    .then(res=>res.json())
    .then(data=>setitems(data.data))
  },[])
  
// console.log(items);
  return (
    <div>
      {/* You can use Coffeeitem with className's and data-cy as given in problem description  */}
      <h1>Coffee House</h1>
      <button onClick={fetchData} className="get-coffee">Get Coffee</button>
      <div data-cy="container">{
         items.map((ele)=>(
          <CoffeeItem img={ele.image} title={ele.title} price={ele.price}/>
        ))
      }</div>
    </div>
  );
};

export default CoffeeDetails;

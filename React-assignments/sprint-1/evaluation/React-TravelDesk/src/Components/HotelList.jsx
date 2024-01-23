import React, { useState } from "react";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const [data,setData]=useState([]);
  const [total,setTotal]=useState(0);
  const [getHotel,setGetHotel]=useState(false);

  const handleFetch=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-accomodations`);
    let data=await res.json();
    console.log(data?.data);
    setData(data?.data);
    setGetHotel(true);
  }
  const handleOrder=(id)=>{
    let filterData=data.filter((el)=>el.id==id);
    console.log(filterData[0].pricePerNight)
    setTotal(total+filterData[0].pricePerNight);
  };
  const handleCancelOrder=(id)=>{
    let filterData=data.filter((el)=>el.id==id);
    console.log(filterData[0].pricePerNight)
    setTotal(total-filterData[0].pricePerNight);
  }
  return (
    <div data-testid="hotel-list">
      <h1>Travel Desk</h1>
      {/* add total cost and Get Hotels button here */}
      {getHotel?null:<button className="get-hotels" onClick={handleFetch}>Get Hotels</button>}
      {(total!=0)?<h6 className="totalcost">`Total cost:${total}`</h6>:null}

      <div data-cy="container">
        {/* Add the hotel details here with the help of HotelCard here */}
        {data.map((el)=>(
          <HotelCard key={el.id} {...el} handleCancelOrder={handleCancelOrder} handleOrder={handleOrder}/>
        ))}
      </div>
    </div>
  );
};

export default HotelList;

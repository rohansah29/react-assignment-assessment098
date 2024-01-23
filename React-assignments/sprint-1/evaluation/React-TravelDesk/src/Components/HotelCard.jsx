import React, { useState } from "react";
import BookHotelBtn from "./BookHotelBtn";

const HotelCard = ({image,availability,amenities,availableRooms,location,name,pricePerNight,id,handleOrder,handleCancelOrder}) => {
  const [showAmen,setShowAmen]=useState(false);

  return (
    <div data-testid="hotel-card">
      {/* add image here */}
      <img className="image" src="https://placehold.co/350x300" alt="err" />
      <div data-testid="cardinfo">
        {/* Add the required elements as per the problem statement */}
        <h2 className="name">{name}</h2>
        <p className="location">{location}</p>
        <p className="price">{pricePerNight} per night</p>
        <p>{availableRooms} rooms available from {availability.checkIn} to {availability.checkOut}</p>
        <button onClick={()=>setShowAmen(!showAmen)}>{showAmen?"Hide Amenities":"Show Amenities"}</button>
        {showAmen?<div data-testid="show-amenities">
          <ul className="amenities">
            {amenities.map((el)=>(
              <li>{el}</li>
            ))}
          </ul>
        </div>:null}
        {/* Add BookHotelBtn component here */}
        <BookHotelBtn id={id} handleCancelOrder={handleCancelOrder} handleOrder={handleOrder}/>
      </div>
    </div>
  );
};

export default HotelCard;

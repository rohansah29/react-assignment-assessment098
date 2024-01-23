import React, { useState } from "react";

const BookHotelBtn = ({id,handleOrder,handleCancelOrder}) => {
  const [reqBtn,setReqBtn]=useState(false);
  return (
    <div data-testid="book-hotel-buttons">
      {/* use className and other attributes as given in problem */}
      <button disabled={reqBtn} className="request-booking" onClick={()=>{setReqBtn(true);handleOrder(id)}}>{reqBtn?"Request Placed":"Request Booking"}</button>
      {reqBtn?<button className="cancel_request_button" onClick={()=>{setReqBtn(false);handleCancelOrder(id)}}>Cancel Request</button>:null}
    </div>
  );
};

export default BookHotelBtn;

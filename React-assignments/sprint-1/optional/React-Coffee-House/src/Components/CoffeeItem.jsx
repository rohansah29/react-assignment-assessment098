import React from "react";
import { useState } from "react";

const CoffeeItem = ({image,title,price,id,handleOrder,handleCancelOrder}) => {
  const [orderBtn,setOrderBtn]=useState(false);
  return <div className="coffee_card">{/* receive image,title,price and other required things as props    */}
  <img src={image} alt="err" />
  <h3>{title}</h3>
  <h5>{price}</h5>
  <button disabled={orderBtn} className="place_order_button" onClick={()=>{handleOrder(id);setOrderBtn(true)}}>{orderBtn?"Order Placed":"Place Order"}</button>
  {orderBtn?<button className="cancel_order_button" onClick={()=>{handleCancelOrder(id);setOrderBtn(false)}}>Cancel Order</button>:null}
  </div>;
};

export default CoffeeItem;

import React from "react";

const CoffeeItem = ({img,title,price}) => {
  return <div>{
    <div className="coffee_card">
      <img src={img}></img>
    <h3>{title}</h3>
    <h5>{price}</h5>
    </div>
    }</div>;
};

export default CoffeeItem;

import React from "react";

const CoffeeCard = ({image,description,price,title,ingredients}) => {
  // console.log(ingredients.length)
  return <div>
    <img src={image} />
    <h2 className="title">{title}</h2>
    <p className="price">{price}</p>
    <p className="description">{description}</p>
    <ul classname="ingredient">
      {ingredients.map((item)=>
        <li classname ="ingredient">{item}</li>
      )}
    </ul>
  </div>;
};

export default CoffeeCard;

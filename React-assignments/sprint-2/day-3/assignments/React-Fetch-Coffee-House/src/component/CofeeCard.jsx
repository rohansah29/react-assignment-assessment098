import React from "react";

const CofeeCard = ({title,price,image,description,ingredients}) => {
  
  return (
    <div className="coffee_card">
      <img src={image}/>
      <div>
        <h2 className="title">{/* coffee name */title}</h2>
        <p className="price">{/* coffee price */price}</p>
        <p>{/* coffee description */description}</p>

        {/* map ingredients intside li into ul(ul tag have class - ingredients) */}
        <li className="ingredient">
          {
            ingredients.map((el)=>(
              <ul>{el}</ul>
            ))
          }
        </li>
      </div>
    </div>
  );
};

export default CofeeCard;

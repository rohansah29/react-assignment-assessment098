import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

const Comment = ({title,color,rating,id,handleBin,handleRating}) => {
  return (
    <div className="ratingcard">
      {/* Add title in h1 tag and StarRating component */}
      <h1 style={{color:`${color}`}}>{title}</h1>
      <StarRating rating={rating} id={id} handleRating={handleRating}/>

      <FaTrash data-icon="trash" onClick={()=>handleBin(id)} />
    </div>
  );
};
export default Comment;

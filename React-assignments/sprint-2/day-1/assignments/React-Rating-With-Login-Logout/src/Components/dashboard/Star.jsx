import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({rating,idStar,id,handleRating}) => {
  return <FaStar data-icon="star" style={{color:(idStar>rating)?"grey":"yellow",cursor:"pointer"}} onClick={(idStar>rating)?()=>{handleRating(id,idStar)}:()=>{handleRating(id,idStar)}} />;
};
export default Star;

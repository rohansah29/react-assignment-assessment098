import React from "react";
import Comment from "./Comment";

const CommentList = ({dataa,handleBin,handleRating}) => {
  return (
    <>{/* Add you comments with the help of Comment component using map */
    dataa.map((item)=>(
      <Comment key={item.id} {...item} handleBin={handleBin} handleRating={handleRating}/>
    ))
    }</>
  );
};
export default CommentList;

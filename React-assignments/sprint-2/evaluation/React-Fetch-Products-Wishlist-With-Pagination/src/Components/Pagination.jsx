import React from "react";

const Pagination = ({ page, btns, handlePage }) => {
  const Button =
    btns != -1 &&
    new Array(btns).fill(0).map((_, index) => (
      <button
        disabled={page === index + 1}
        key={index}
        onClick={() => handlePage(index)}
        style={{backgroundColor:(page===index+1)?"red":""}}
      >
        {index + 1}
      </button>
    ));
  return Button;
};

export default Pagination;

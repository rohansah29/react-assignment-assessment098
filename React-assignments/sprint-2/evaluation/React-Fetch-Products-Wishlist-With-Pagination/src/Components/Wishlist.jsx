import React from "react";

const Wishlist = ({ setBack, wishData,handleRemove }) => {
  console.log(wishData);
  return (
    <div className="wishlist_container">
      <button
        className="goBack_btn"
        onClick={() => {
          setBack(true);
        }}
      >
        Go Back
      </button>
      <div className="wishlist_products_wrapper">
        {wishData.map((el) => (
          <div key={el.id} className="product_card">
            <img src={el.img} alt="err" />
            <h3>{el.brand}</h3>
            <h4>{el.category}</h4>
            <p>{el.details}</p>
            <p>{el.price}</p>
            <button className="removeWishlist_btn" onClick={()=>{handleRemove(el.id)}}>Remove From Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

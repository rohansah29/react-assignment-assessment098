import React from "react";
import {useState,useEffect} from "react";

const ProductCard = ({id,brand,category,details,img,price,setBack,handleAdd,wishlistStatus}) => {
  const [add,setAdd]=useState(true);

  useEffect(() => {
    setAdd(!wishlistStatus[id]);
  }, [wishlistStatus, id]);

  return <div className="product_card">
    <img src={img} alt="err" />
    <h3>{brand}</h3>
    <h4>{category}</h4>
    <p>{details}</p>
    <p>{price}</p>
    {add?<button className="addToWishlist_btn" onClick={()=>{setAdd(false);handleAdd(id)}}>Add To Wishlist</button>:
    <button className="addToWishlist_btn" onClick={()=>{setBack(false)}}>Go To Wishlist</button>}
  </div>;
};

export default ProductCard;

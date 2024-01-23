import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  console.log(products);
  return <div data-testid="products-container">{products.map((item) => {<ProductItem src={item.image} title={item.title} price={item.price} category={item.category}/>})}</div>;
};

// export
export default ProductList;

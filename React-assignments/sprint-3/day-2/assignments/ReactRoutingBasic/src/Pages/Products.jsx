import React from "react";
import { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  const fetchAndRender = async () => {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    );
    let data = await res.json();
    setData(data.data);
  };

  useEffect(() => {
    fetchAndRender();
  }, []);

  console.log(data.length)

  return (
    <div>
      <h1>All Products</h1>
      <div className="products-wrapper">
        
          {
            /* Map the below div agaisnt your product data */
            data.map((item) => (
              <div>
                <div className="id">{item.id}</div>
                <h3 className="title">{item.title}</h3>
                <div className="category">{item.category}</div>
                <div className="price">{item.price}</div>
              </div>
            ))
          }
        
      </div>
    </div>
  );
}

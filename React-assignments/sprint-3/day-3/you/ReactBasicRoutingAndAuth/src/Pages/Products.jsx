import React from 'react'
import {useState,useEffect} from "react";

export default function AllProducts() {

  const [data,setData] = useState([]);

  const fetchAndRender=async()=>{
    const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
    let data=await res.json();
    // console.log(data);
    setData(data.data);
  }

  useEffect(()=>{
    fetchAndRender();
  },[])

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */
            data.map((item)=>(
              <div key={item.id}>
                <h3 className = "name">{item.title} </h3>
                <div className= "brand">{item.brand}</div>
                <div className = "price">{item.price}</div>
            </div>
            ))
          }
            
      </div>
    </div>
  )
}
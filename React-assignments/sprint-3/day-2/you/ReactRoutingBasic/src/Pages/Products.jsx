import React from 'react'
import {useState,useEffect} from "react";

export default function Products() {
  const [data,setData]=useState([]);

  const fetchAndRender=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
    let data=await res.json();
    setData(data.data);
  }
  console.log(data);

  useEffect(()=>{
    fetchAndRender();
  },[]);

  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper">
            {/* Map the below div agaisnt your product data */
            data.map((el)=>(
              <div key={el.id}>
            <div className = "id" >{el.id} </div>
            <h3 className = "title" >{el.title} </h3>
            <div className = "category" >{el.category} </div>
            <div className = "price" >{el.price} </div>
              </div>
            ))
            }
      </div>
    </div>
  )
}
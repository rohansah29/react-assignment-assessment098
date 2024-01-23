import React from 'react'
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export default function ProductDetails() {

  const {id} = useParams();
  // console.log(id)
  

  const [res,setRes] = useState([]);

  const fetchAndRender=async()=>{
    try {
      let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
      let data=await res.json();
      // console.log(data);
      setRes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchAndRender(id);
  },[id])

  return (
    <div data-testid = "product-details" >
      <div>
      {/* show product details here */
      <>
      <h1 data-testid ="product_name">{res.name}</h1>
      <h1 data-testid ="product_price">{res.price}</h1>
      </>
      }
      </div>
    </div>
  )
}

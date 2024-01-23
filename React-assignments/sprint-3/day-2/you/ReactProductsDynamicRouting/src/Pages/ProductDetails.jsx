import React from 'react'
import {useParams} from "react-router-dom"
import { useState,useEffect } from 'react';

export default function ProductDetails() {

  const {id} = useParams();

  const [data,setData]=useState([]);

  const fetchAndRender=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`);
    let data=await res.json();
    console.log(data);
    setData(data);
  }

  useEffect(()=>{
    fetchAndRender();
  },[])

  return (
    <div data-testid = "product-details" >
      <div>
      {/* show product details here */}
      <p data-testid = "product_name">{data.name}</p>
      <p data-testid ="product_price">{data.price}</p>
      </div>
    </div>
  )
}

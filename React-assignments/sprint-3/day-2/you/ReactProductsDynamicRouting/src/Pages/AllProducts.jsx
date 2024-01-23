import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

export default function AllProducts() {
  const [data,setData]=useState([]);

  const fetchAndRender=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
    let data=await res.json();
    console.log(data);
    setData(data);
  }

  useEffect(()=>{
    fetchAndRender();
  },[])


  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
      {
        data.map((el)=>(
          <Link key={el.id} to={`/products/${el.id}`}>
          <p>{el.id}</p>
          <p data-testid = "product_name">{el.name}</p>
          <p data-testid ="product_price">{el.price}</p>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

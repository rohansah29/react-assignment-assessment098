import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {

  const [res,setRes] = useState([]);

  const fetchAndRender=async()=>{
    try {
      let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
      let data=await res.json();
      // console.log(data);
      setRes(data);
    } catch (error) {
      console.log(error);
    }
  }
console.log(res.length)
  useEffect(()=>{
    fetchAndRender();
  },[])

//  const handleClick=(item)=>{
//     // window.location.href=myLink;
//     <Link to={`/products/${item.id}`}></Link>
//   }

  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {
          res.map((item)=>(
            <Link key={item.id} to={`/products/${item.id}`}>
            <div style={{border:"1px solid black",margin:"10px",padding:"10px",color:"black"}}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import axios from "axios";

const getData=()=>{
return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/groceries`)
}

export default function Dashboard() {
    const [data,setData]= useState([]);
    const [query,setQuery] = useState("");
    let fetchData=async()=>{
        try {
            let data=await getData();
            console.log(data);
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        // fetchAndRender();
        // fetch("http://localhost:8080/groceries")
        // .then(res=>res.json())
        // .then(json=>setData(json))
        fetchData();
    },[]);
    // const fetchAndRender=async()=>{
    //     let res=await fetch("http://localhost:8080/groceries");
    //     let data= await res.json();
    //     console.log(data);
    //     setData(data)
    // }
    // console.log(query);
    return (
        <div>
            <input 
                className = "search_box"
                type = "text"
                placeholder = "Search Groceries"
                onChange={(e)=> setQuery(e.target.value)}
            />
            <div className = "grocery_data">
            {/* map the below div against your grocery data */}
                {/* <div>
                    <h3> name </h3>
                    <div> price </div>
                </div> */}
                {
                    data.filter((data)=>data.name.toLowerCase().includes(query)).map((item)=>(
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <div>{item.price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
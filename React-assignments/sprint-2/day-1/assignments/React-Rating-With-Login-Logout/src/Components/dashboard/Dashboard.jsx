import CommentList from "./CommentList";
import React from "react";

const data = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = ({setAuth}) => {
  const [dataa,setData]=React.useState(data);


  const handleBin=(id)=>{
    let filteredData=dataa.filter((el)=>el.id!==id);
    setData(filteredData);
  }

  const handleRating=(id,val)=>{
    const filterRating=data.filter((el)=>val===el.id);
    console.log(filterRating[0]);
    const updateData=dataa.map((el)=>el.id===id?{...el,title:filterRating[0].title,color:filterRating[0].color,rating:filterRating[0].rating}:el);
    setData(updateData);
  }

  return (
    <div className="dashboard" style={{margin:"auto",textAlign:"center",border:"2px solid black"}}>
      <h1>Rating - App</h1>
      {/* Add Logout button here */}
      <button onClick={()=>setAuth(false)}>Logout</button>

      {/* Add CommentList here */}
      <CommentList dataa={dataa} handleBin={handleBin} handleRating={handleRating} />
    </div>
  );
};

export default Dashboard;

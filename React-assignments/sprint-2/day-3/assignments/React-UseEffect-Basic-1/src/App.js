import React, { useEffect, useState } from "react";

function App() {

  const [data,setData]=useState([]); //Get all data
  const [numberOfButtons,setNumberOfButtons]=useState(-1);	
  const [page,setPage]=useState(1);
  
  const getData=async()=>{try {
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=12`);
    let data=await res.json();
    console.log(data);
    setData(data?.data);
    setNumberOfButtons(data?.totalPages)
  } catch (error) {
    console.log(error);
  }}

  useEffect(()=>{
     getData();
  },[page])




  const handleClick = (value)=>{
    setPage(value+1);
  }
  
  return (
	<div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}            
            {
		 data && data.map((item) => (
              <tr key={item.id}>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
            ))}            
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {
        numberOfButtons !=-1 &&
		new Array(numberOfButtons).fill(0).map((_,index) => (
        	<button 
		key={index} 
		disabled={page===index+1} 
		style={{border:(page===index+1)?"1px solid red":""}} 
		onClick={()=>handleClick(index)}>{index+1}</button>
      ))}     
    </div>
  );
}

export default App;
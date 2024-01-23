import React from "react";
import { Button } from "react-bootstrap";

const fetchData=async()=>{
  let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`);
  let data=await res.json();
  return (data.data);
}
function App() {
  const [data,setData] = React.useState([]);
  const[pagedata,setPageData] = React.useState([]);
  const [count,setCount] = React.useState(0);

  React.useEffect(()=>{
    (async function(){
      let updateData= await fetchData();
      setData(updateData);
    })()
  },[])
  console.log(data);

  const btn=Math.ceil(data.length/12);

  const handleClick = (value)=>{

    let i=value*12;
    let arr=[];
    for(let j=0;j<12;j++){
      if(data[i]!==undefined){
        arr.push(data[i]);
        i++;
      }
    }
    
    setPageData(arr);
    setCount(value+1);
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
            {pagedata.map((item) => (
              <tr>
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
      {new Array(btn).fill(0).map((item,index) => (
        <button key={index} disabled={count===index+1} onClick={()=>handleClick(index)}>{index+1}</button>
      ))}      
    </div>
  );
}

export default App;

import {useState,useEffect} from "react";
import {Navigate} from "react-router-dom";

const Problems = () => {
  const [data,setData]=useState([]);
  const [value,setValue]=useState("");

  const fetchAndRender=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cpproblems`);
    let data=await res.json();
    console.log(data);
    setData(data);
  }

  useEffect(()=>{
    fetchAndRender();
  },[value])

  const handleSelect=(id)=>{
    if(value=="view"){
      <Navigate to={`/problems/${id}/view`}/>
    }else if(value=="delete"){
      <Navigate to={`/problems/${id}/delete`}/>
    }
  }
  return (
    <table data-testid="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Author</th>
          <th>Type</th>
          <th>Tags</th>
          <th>Difficulty</th>
          <th>Status</th>
          <th>Max Marks</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {/* Add all the problems here with the help of TableRowCard component */
        data.map((el)=>(
          <tr>
            <td>{el.Name}</td>
            <td>{el.Category}</td>
            <td>{el.Author}</td>
            <td>{el.Type}</td>
            <td>{el.Tags.map((el)=>(el+","))}</td>
            <td>{el.Difficulty}</td>
            <td>{el.Status}</td>
            <td>{el.Max_Marks}</td>
            <select onChange={(e)=>{setValue(e.target.value);handleSelect(el.id)}}>
              <option value="">Options</option>
              <option value="view">View</option>
              <option value="delete">Delete</option>
            </select>
          </tr>
        ))
        }
      </tbody>
    </table>
  );
};

export default Problems;

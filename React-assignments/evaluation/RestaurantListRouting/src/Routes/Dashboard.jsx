import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react";


function Dashboard() {

  const [data,setData]=useState([]);

  const {token,logout}=useContext(AuthContext);

  const fetchAndRender=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=10`)
    let data=await res.json();
    setData(data?.data)
  }
  console.log(data);

  useEffect(()=>{
    fetchAndRender();
  },[])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}/>
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;

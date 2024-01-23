import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesRow";
import Pagination from "./Pagination";

function Countries() {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [total ,settotal ]=useState(0);
  const [current ,setCurrent ]=useState(1);


  const fetchAndRender=async()=>{
    setLoading(true);
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${current}&limit=10&orderBy=desc`);
    let data=await res.json();
    console.log(data);
    setData(data?.data);
    settotal (data?.totalPages)
    setLoading(false);
  }
  console.log(data);

  useEffect(()=>{
    fetchAndRender();
  },[current])

  return loading?<LoadingIndicator/>:(
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */
          data.map((el)=>(
            <CountriesCard key={el.id} {...el}/>
          ))
          }
          
        </tbody>
      </table>
      <div>{/* Pagination */}<Pagination total ={total } current={current} onChange={setCurrent}/></div>
    </div>
  );
}

export default Countries;

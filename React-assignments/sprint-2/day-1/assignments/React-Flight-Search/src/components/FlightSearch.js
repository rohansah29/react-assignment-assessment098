import React from "react";
import { useEffect,useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  

  let res=await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
  let data=await res.json();
  return data;
};

function FlightSearch() {

  const [item,setItem]= useState([]);
  const [update,setUpdate]= useState([]);
  const [src,setSrc] = useState("");
  const [des,setDes] = useState("");

  console.log(item);
  // on page load fetch the data (useEffect)
  useEffect(()=>{
    (async function(){
      const data=await fetchData()
      setItem(data);
    })()
  },[])

  const handleSearch = () => {
    // filter the data based on source and destination
    let aux=[...item];
    aux=aux.filter((el)=> src===el.source && des===el.destination);
    setUpdate(aux);

  };
console.log(update);

  const handleClickSource=(e)=>{
    setSrc(e.target.value);
  }
  const handleClickDestination=(e)=>{
    setDes(e.target.value);
  }
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" onChange={handleClickSource} />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" onChange={handleClickDestination} />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */
      update.length>0?<SearchResults update={update}/>:<div data-testid="no-flights" className="">
      No Flights Found
    </div>
      }
      
      
    </div>
  );
}

export default FlightSearch;

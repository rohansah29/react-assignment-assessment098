import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function SingleRestaurantPage() {
  const [data,setData]=useState([]);
  const {id}=useParams();
  console.log(id);

  const fetch=async()=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    let data=await res.json();
    console.log(data);
    setData(data);
  }
console.log(data);
  useEffect(()=>{
    fetch();
  },[])

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data[0].name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data[0].type}</div>
      <div data-testid="restaurant-rating">Rating:{data[0].rating}</div>
      <div data-testid="restaurant-votes">Votes:{data[0].number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data[0].price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data[0]} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;

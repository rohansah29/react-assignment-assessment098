import CofeeCard from "../component/CofeeCard";
import { useEffect, useState } from "react";

const Cofee = () => {
  const [data, setData] = useState([]);

  const fetchAndRender = async () => {
    try {
      let res = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`
      );
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     setData(data)
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
  };

  useEffect(() => {
    fetchAndRender();
  }, []);
  console.log(data);
  // get coffee data from json server use useEffect and useState

  return (
    <div className="coffee_container">{/* map coffee into coffee card */
    data.map((item)=>(
      <CofeeCard title={item.title} price={item.price} image={item.image} description={item.description} ingredients={item.ingredients}/>
    ))
    }</div>
  );
};

export default Cofee;

import React from "react";
import {useState,useEffect} from "react";
import ProductCard from "../Components/ProductCard";
import Wishlist from "../Components/Wishlist";
import Pagination from "../Components/Pagination";

const Dashboard = () => {
  // if data is loading the render below loading indicator on the screen
  // 
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  const [back,setBack]=useState(true);
  const [wishData,setWishData]=useState([]);
  const [page,setPage]=useState(1);
  const [btns,setBtns]=useState(-1);
  // const [wishlist,setWishList]=useState(false);
  const [wishlistStatus, setWishlistStatus] = useState({});

  const fetchAndRender=async()=>{
    try {
      setLoading(true);
      let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?limit=5&page=${page}`);
      let data=await res.json();
      setData(data?.data);
      console.log(data);
      setBtns(data?.totalPages)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  console.log(page);

  useEffect(()=>{
    fetchAndRender();
  },[page])
  

  const handleAdd=(id)=>{
    let filterData=data.filter((el)=>el.id===id);
    setWishData([...wishData,filterData[0]])
    setWishlistStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
  }
  // console.log(wishData);
  const handleRemove=(id)=>{
    let filterData=wishData.filter((el)=>el.id!==id);
    setWishData(filterData);
    setWishlistStatus((prevStatus) => ({ ...prevStatus, [id]: false }));
  }

  const handlePage=(index)=>{
    setPage(index+1);
  }

  return (
    <div>
      {back?<>
      {loading?<h1 className="loading_indicator">Loading...</h1>:null}
        <div className="products_wrapper">
          {/* Map products to ProductCard.jsx */
          data.map((el)=>(
            <ProductCard key={el.id} {...el} setBack={setBack} handleAdd={handleAdd} wishlistStatus={wishlistStatus}/>
          ))
          }
        </div>
        <div className="pagination_wrapper">
          {/* Import pagination component and apply logic */}
          <Pagination page={page} btns={btns} handlePage={handlePage} />
        </div>
      </>:<Wishlist setBack={setBack} wishData={wishData} handleRemove={handleRemove}/>}

      {/* Import wishlist component here and show when `Go To Wishlist button clicked` and hide above components (use conditional rendering) */}
    </div>
  );
};

export default Dashboard;

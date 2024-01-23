import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react";

function Dashboard() {
  const {authState,loginUser,logoutUser}=useContext(AuthContext);
  const {token,isAuth}=authState;
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [totalPage,setTotalPage]=useState(0);
  const [page,setPage]=useState(1);
  const [sortBy,setSortBy]=useState("asc");

  const fetchAndRender=async()=>{
    setLoading(true);
    let url=``;
    if(sortBy=="desc"){
      url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=desc&sort=price`;
    }else{
      url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=asc&sort=price`;
    }
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    setData(data?.data);
    setTotalPage(data?.totalPages)
    setLoading(false);
  }

  useEffect(()=>{
    fetchAndRender();
  },[page,sortBy])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button disabled={sortBy=="asc"} data-testid="low-to-high" onClick={()=>setSortBy("asc")}>Sort low to high</button>
      <button disabled={sortBy=="desc"} data-testid="high-to-low" onClick={()=>setSortBy("desc")}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination totalPage={totalPage} current={page} onChange={setPage}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading?<Loader />:null}
        {/* Product Listing, remember to show loading indicator when API is loading */}
        <ProductList products={data}/>
      </div>
   
    </div>
  );
}

export default Dashboard;

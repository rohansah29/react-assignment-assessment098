import Loader from "../Components/Loader";
import { useState,useContext,useEffect } from "react";
import { AuthProvider } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import ProductList from "../Components/ProductList";

function Dashboard() {
  const {isAuth,setIsAuth,token,setToken} = useContext(AuthProvider);
  // if(token!=""){
  //   setToken("Qw12la31afa13e1ds")
  // }
  const handleLogout=()=>{
    setIsAuth(false);
    return <Navigate to="/login" />
  }
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  const fetchAndRender=async()=>{
    try {
      setLoading(true);
      let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      let data=await res.json();
      console.log(data);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  console.log(data);
  useEffect(()=>{
    fetchAndRender();
  },[])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader loading={loading} />
        {/* Product Listing, remember to show loading indicator when API is loading */
        
          <ProductList products={data} />
        
        }
      </div>
   
    </div>
  );
}

export default Dashboard;

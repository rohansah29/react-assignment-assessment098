import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Problems from "../Pages/Problems";
import SingleProblem from "../Pages/SingleProblem";
import DeletePage from "../Pages/DeletePage";

const AllRoutes = () => {
  return <div>{/* Add Routes here */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/problems" element={<Problems/>}/>
    <Route path="/problems/:id/view" element={<SingleProblem/>}/>
    <Route path="/problems/:id/delete" element={<DeletePage/>}/>
  </Routes>
  </div>;
};

export default AllRoutes;

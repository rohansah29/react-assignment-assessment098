import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="users-app">{/* add Navbar and AllRoutes here */}
    <Navbar/>
    <AllRoutes/>
    </div>
  );
};

export default App;

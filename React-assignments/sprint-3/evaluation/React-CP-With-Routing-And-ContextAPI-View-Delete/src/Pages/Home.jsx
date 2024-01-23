import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div data-cy="welcome-text">
      <h1>
        Welcome to Masai's Coding Platform. Click here to{" "}
        {/* Add Link to Login here */}
        <Link to="/login">Login</Link>
      </h1>
    </div>
  );
};

export default Home;

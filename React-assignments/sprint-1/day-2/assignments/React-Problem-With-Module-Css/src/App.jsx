import React from "react";
import Courses from "./Components/courses/Courses";
import MobileInfo from "./Components/mobileInfo/MobileInfo";
import Users from "./Components/users/Users";
import styles from "../src/App.module.css";
import "./Components/mobileInfo/MobileInfo.module.css"

const App = () => {
  return (
    <div>
      {/* Add h1 tag here as per the problem statement */
      <h1 className={styles.heading}>This app contains different components like MobileInfo, Courses, Users</h1>
      }
      {/* Add components here MobileInfo, Courses, Users here */
      <>
      <MobileInfo/>
      <Courses/>
      <Users/>
      </>
      }
    </div>
  );
};

export default App;

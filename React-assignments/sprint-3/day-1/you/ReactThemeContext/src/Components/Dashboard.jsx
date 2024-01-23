import React, { useState } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import { useContext } from 'react'
import db from "../db.json"
import User from './User'
// console.log(db)
export const Dashboard = () => {

    const {theme,setTheme} =useContext(ThemeContext);
    const {isDarkTheme,setisDarkTheme} = useState(false);
    const handleChange=(e)=>{
        console.log(e.target.value);
        
        e.target.value==="Light Theme" ? setTheme("light") && setisDarkTheme(false) : setTheme("dark") && setisDarkTheme(true)
    }

    return (
        <div data-testid = "dashboard-cont" style={{
            backgroundColor: theme === "dark" ? "black" : "white"
        }} >
            <select data-testid = "select-theme" onChange={handleChange}>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            {/* map through the users and render User component */
            db.map((item)=>(
                <User isDarkTheme={isDarkTheme} user={item}/>
            ))
            }
        </div>
)
}

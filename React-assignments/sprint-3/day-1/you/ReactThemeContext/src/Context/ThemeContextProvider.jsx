import React from 'react'
import App from '../App'
import { createContext,useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider() {

  const [theme, setTheme] =useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}> <App /> </ThemeContext.Provider>
      
  )
}

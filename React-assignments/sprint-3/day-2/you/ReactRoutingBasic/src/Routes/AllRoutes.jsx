import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import Home from '../Pages/Home';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
        </Routes>
    )
}

export {AllRoutes}
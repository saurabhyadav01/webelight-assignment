import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart.jsx";
import Landing from "../components/Landing";
import ProductDetails from "../components/ProductDetails";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
       <Route path="/" element={<Landing />}></Route>
       <Route path="products/:id" element={<ProductDetails/>}></Route>
       <Route path="cart" element={<Cart/>}></Route> 
      </Routes> 
        </>
    )
}

export default AllRoutes
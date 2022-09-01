import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../component/Cart";

import Landing from "../component/Landing";
import ProductDetails from "../component/ProductDetail";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
       <Route path="/" element={<Landing />}/>
       <Route path="products/:id" element={<ProductDetails/>} />
       <Route path="/cart" element={<Cart/>}/>
      </Routes> 
        </>
    )
}

export default AllRoutes
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../component/Landing";
import ProductDetails from "../component/ProductDetail";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
       <Route path="/" element={<Landing />}/>
       <Route path="products/:id" element={<ProductDetails/>} />
      </Routes> 
        </>
    )
}

export default AllRoutes
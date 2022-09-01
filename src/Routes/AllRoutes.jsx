import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Home";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
       <Route path="/" element={<Home />}/>
      </Routes> 
        </>
    )
}

export default AllRoutes
import React from "react";
import Home from "../component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
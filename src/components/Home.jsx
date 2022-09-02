import React from "react";

import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";


function Home(){
    return (
        <>
         <Header />
       
        <ProductListing /> 
         {/* <ProductDetails /> */}
      
     </>
    )
}

export default Home
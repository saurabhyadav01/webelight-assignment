import React, { useEffect, useState } from "react";

 import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { fetchProduct } from '../Redux-toolkit/Product-toolkit';
import Header from "./Header";

function Home(){
    

 const product = useSelector((store)=>store.product.data)
 const dispatch=useDispatch()

   useEffect(()=>{
     dispatch(fetchProduct())
   },[])
 
    return(
        <>

<Header />
        <div className="container">
       
        <h2 style={{textAlign:"center"}}>PRODUCTS</h2>
            <div style={{
                display:"grid",
                width:"99%",
                height:"200px",
                gridTemplateColumns:"repeat(4 ,1fr)",
                margin:"auto",
                gridGap:"5%"
                
                }} className="product-container" >
              
                {
                    product.length? product.map((e)=>(
                        
                        <div style={{
                          height: "400px",padding:"2%",textDecoration: "none",marginTop:"10px",border:"1px solid gray",
                        }} className="product-item" key={e._id} >
                             <Link to={`products/${e._id}`} style={{ textDecoration: "none" }}>
    
                             <img style={{width:"100%",height:"75%"}} src={e.image1} alt="" />
                       <h4 style={{textDecoraton:"none"}}> Title : {e.title}</h4>
                       <h4  style={{textDecoraton:"none"}}>Price : { e.price}</h4>
    
                       <button
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(77,166,255)",
                        height:"40px",
                        fontSize: "20px",
                        marginTop:"5px",
                        border:"none",
                        borderRadius:"2%"
                      }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        // addToCart();
                      }}
                    >
                      BUY NOW
                    </button>
                             </Link>
                             
                        </div>
                        ))
                 :"" 
                }
            
            </div>
        </div>
       
        </>
    )
}


export default Home
import React, { useEffect, useState } from "react";
import Home from "./Home";
 import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchCart } from "../Redux-toolkit/Cart-toolkit";
import Loader from "./Loader";
import Landing from "./Landing";
import PageLoader from "./PageLoder";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { category, fetchProduct, filterprice } from "../Redux-toolkit/Product-toolkit";

function ProductListing(){
    const product=useSelector((store)=>
    {
   return store.product.data
    });
    console.log("product",product)
    const dispatch=useDispatch()
    const [selectedCategory,setSelectedCategory]=useState([]);
    const [productData,setProductData]=useState([])

       const CategoryHandler=(e)=>{
             const {value}=e.target;
             let data=[]
            dispatch(category(value))
       }
       
       const PriceHandler=(e)=>{
        const {value}=e.target;
        let data=[]
     dispatch(filterprice(value))
  }
  


    useEffect(()=>
    {
        
      
        dispatch(fetchProduct())
    
    },[])
    return(
        <>
         
        <div className="container" >
       
        <h2 style={{textAlign:"center"}}>PRODUCTS</h2>
        <div style={{display:"flex",padding:"1%"}} className='filter_div'>
             {/* color filter box */}
            <div className="checkBoxDiv style={{}}">
              <h4>Filter By Category</h4>
                <div><select style={{width:"200px",height:"50px",margin:"1%"}} name="select category" id="" onChange={CategoryHandler}>
                <option style={{width:"100%",height:"30px"}} value="men's clothing">Men</option>
                <option   style={{width:"100%",height:"30px"}} value="women's clothing">Women</option>
                <option  style={{width:"100%",height:"30px"}}  value="cosmetices">Cosmetics</option>
                </select></div>
                
     
            </div>
              {/* color filter box */}
              <div className="checkBoxDiv style={{}}">
              <h4>Filter By Price</h4>
                <div><select style={{width:"200px",height:"50px",margin:"1%"}} name="select category" id="" onChange={PriceHandler}>
                <option style={{width:"100%",height:"30px"}} value="1000">Below 1000</option>
                <option   style={{width:"100%",height:"30px"}} value="3000">Below 3000 </option>
                <option  style={{width:"100%",height:"30px"}}  value="5000">above 3000</option>
                </select></div>
                
     
            </div>
            </div>
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
                        backgroundColor: "#4DA6FF",
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
                 :"wfdc" 
                }
            
            </div>
        </div>
        <PageLoader/> 
        </>
    )
}


export default ProductListing

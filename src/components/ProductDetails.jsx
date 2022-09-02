import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux-toolkit/Cart-toolkit";
import { useNavigate } from "react-router-dom";
import { postCart } from "../Redux-toolkit/Cart-toolkit";
// import { useSelector } from "react-redux";


const ProductDetails = () => {
  // const {cartData} = useSelector((state) => state.CartReducer);
  // console.log("CARTDATA",cartData)
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate=useNavigate()
  // console.log(id)

  //console.log(product.products)
const  [product,setproduct]=useState({})
  const addToCart = () => {
    const cartData = {
      discount: product.discount,
      id: product.id,
      image1: product.image1,
      image2: product.image2,
      image3: product.image2,
      image4: product.image4,
      image5: product.image5,
      price: product.price,

      quantity: product.quantity,
      rating: product.rating.rate,
      title: product.title,
      tribe: product.tribe,
    };
  }
  
  const fetchProductDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/products/${id}`)

      .catch((err) => {
        //console.log(err)
      });
      setproduct({...res.data})
}

  useEffect(()=>
  {
    fetchProductDetails();
    // dispatch(fetchSelectedProduct(id));
  },[])

 


 
  return (
    <React.Fragment>
<Header />
<div
      
        style={{
          border: "1px solid gray",
          width: "80%",
          height: "600px",
          margin: "auto",
          display: "flex",
          marginTop: "20PX",
        }}
        key={product.id}
      >
        <div style={{ width: "11.1%", margin: "20px" }}>
          <div style={{ width: "100%" }}>
            {" "}
            <img
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid gray",
              }}
              src={product.image2}
              alt=""
            />
          </div>
          <div style={{ width: "100%" }}>
            {" "}
            <img
              style={{ width: "100%", height: "50%", border: "1px solid gray" }}
              src={product.image3}
              alt=""
            />
          </div>
          <div style={{ width: "100%" }}>
            {" "}
            <img
              style={{ width: "100%", height: "50%", border: "1px solid gray" }}
              src={product.image4}
              alt=""
            />
          </div>
          <div style={{ width: "100%" }}>
            {" "}
            <img
              style={{ width: "100%", height: "50%", border: "1px solid gray" }}
              src={product.image5}
              alt=""
            />
          </div>
        </div>
        <div style={{ width: "50%", margin: "20px" }}>
          {" "}
          <img
            style={{ width: "100%", height: "100%", border: "1px solid gray" }}
            src={product.image1}
            alt=""
          />
        </div>
        <div style={{ width: "50%",fontSize:"16px",padding:"2%",lineHeight:"16px"}}>
          <h4 style={{paddingTop:"1%"}} >{product.title}</h4>
          <h4 style={{paddingTop:"1%"}} >Price  :{product.price}</h4>
    
          <h4 style={{paddingTop:"1%"}} >Category  :{product.category}</h4>
          <h4 style={{paddingTop:"1%"}}>description  :{product.description}</h4>
          <h4 style={{paddingTop:"1%"}} >Tribe   :{product.tribe}</h4>

          <h4 style={{paddingTop:"1%"}} >Discount:{product.discount}</h4>

         <div style={{display:"flex",margin:"2px",width:"100%"}}>
         <button
           
           style={{
          
             width:"860%",
             backgroundColor: "#4DA6FF",
             height: "35px",
             fontSize: "20px",
             marginTop:"20%",
             border:"none",
             marginLeft:"25px"
           }}
           onClick={() => {
          
            // if there is no duplicate product then add it to cart
      //  addToCart()
          dispatch(postCart(product));
          
           }}
         >
           Add To Cart
         </button>
        
         </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
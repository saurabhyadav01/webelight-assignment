import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Link, useNavigate } from "react-router-dom";
import { Box, Button, getFormControlLabelUtilityClasses, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteItem, incrementQuantity } from "../Redux-toolkit/Cart-toolkit";
import { deleteCart, fetchCart } from "../Redux-toolkit/Cart-toolkit";



 const  Cart=()=>
{
  const cartData = useSelector((store)=>store.cart.data);
  const qua = useSelector((store)=>store)
  console.log(qua)
  const navigate=useNavigate()
  const dispatch=useDispatch()
console.log(cartData)
 
  const [incProduct, setIncProduct] = useState(1);
  const [data,setData]=useState([]);
  let id=""
 console.log(data)
  const numberOfItem = cartData.length;
  let totalPrice = 0;
  let tribePrice = 0;
  let discount = 0;

  const Total = cartData.map((e) => {
    totalPrice += e.price * e.quantity;
    tribePrice = +e.tribe;

    discount += +e.discount * +e.quantity;
  });
  console.log(totalPrice-discount)
  const handledec = (id) => {
    const filterData = cartData.filter((e) => {
      if (e.id === id && e.quantity > 1) {
        e.quantity--;
      }
      return e;
    });
    setData([...filterData]);
  };
  const handleinc = (id) => {
    const filterData = cartData.filter((e) => {
      if (e.id === id) {
        e.quantity++;
      }
      return e;
    });

    setData([...filterData]);
  };

  const getData = () => {
    setData([...cartData]);
 
  };

  useEffect(() => {
    getData();
   dispatch(fetchCart());
  
  }, []);


  const amountToPay = totalPrice - discount;

  return (
    <React.Fragment>
    
      <Header />

    
      <div style={{ display: "flex" ,height:"50px"}}>
        <div style={{height:"50px"}} className="left">
          <div
            style={{
              border: ".5px solid gray",
              backgroundColor: "#4DA6FF",
              marginTop: "15px",
              height:"30px",
              
            }}
          >
            <h4>My Bag items {numberOfItem}</h4>
          </div>
          <div className="container">
            {cartData.length?cartData.map((e, index) => (
              <div style={{border:"1px solid gray"}}  className="flex" key={index}>
                <div>
                  <h4>{e.id}</h4>
                </div>
                <img style={{ width: "12%" }} src={e.image1} alt="" />
                <div>
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <h4> ₹{e.price * e.quantity}</h4>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    style={{ width: "40px" }}
                    onClick={() => {
                      handleinc(e.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button style={{ width: "40px", margin: "" }}>
                    {e.quantity}
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    style={{ width: "40px" }}
                    onClick={() => {
                      handledec(e._id);
                
                    }}
                  >
                    -
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    onClick={() => {
                      // handleDelete(e._id);
          dispatch(deleteCart(e._id))
         dispatch(fetchCart())
     
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
            :"hf"}
          </div>
        </div>
        <div
          className=""
          style={{
            margin: "80px",
            border: ".5px solid wheat",
            width: "40%",
            margin: "auto",

            height: "350px",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              border: ".5px solid white ",
              borderRadius: "5px 5px 1px 1px",
              backgroundColor: "#4DA6FF",
              height:"30px"
            }}
          >
            <h4>Save Extra With Tribe{tribePrice}</h4>
          </div>
          <div
            style={{
              border: ".5px solid white",
              borderRadius: "1px 1px 1px 5px",
              backgroundColor: "#ffffe0",
              height:"30px"
            }}
          >
            <h4 >Price Summary</h4>
          </div>
          <h4 style={{paddingTop:"10px"}}>Total Price: {totalPrice}</h4>
          <h4 style={{paddingTop:"10px"}}> Discount: {discount}</h4>
          <h4 style={{paddingTop:"10px"}}> Delivery Price: {"Free"}</h4>
          <h4 style={{paddingTop:"10px"}}>Payable Amount :{totalPrice - discount}</h4>

    
          <button
                    onClick={() => {
                      // handleDelete(e._id);
          alert("payment")
     
                    }}
                  >
                    Payment
                  </button>
        </div>
      </div>
    
    </React.Fragment>
  );
};



export default Cart;
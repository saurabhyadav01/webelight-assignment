import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  getFormControlLabelUtilityClasses,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, fetchCart } from "../Redux-toolkit/Cart-toolkit";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.data);
console.log(cartData)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [incProduct, setIncProduct] = useState(1);
  const [data, setData] = useState([]);
  let id = "";
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const numberOfItem = cartData.length;
  let totalPrice = 0;
  let tribePrice = 0;
  let discount = 0;

  const Total = cartData.map((e) => {
    totalPrice += e.price * e.quantity;
    tribePrice = +e.tribe;

    discount += +e.discount * +e.quantity;
  });
  //console.log(totalPrice-discount)
  const handledec = (id) => {
    const filterData = cartData.filter((e) => {
      if (e.id === id && e.quantity > 1) {
        e.quantity--;
        console.log(e);
      }

      return e;
    });
    setData([...filterData]);
  };
  const handleinc = (id) => {
    console.log(id);
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
  console.log(data);
  useEffect(() => {
    getData();
  
  }, []);
  // if(id==undefined)
  // {
  //   return
  // }

  const amountToPay = totalPrice - discount;

  return (
    <React.Fragment>
      <Header />

      <div style={{ display: "flex", height: "30px" }}>
        <div style={{ height: "40px" }} className="left">
          <div
            style={{
              border: ".5px solid gray",
              backgroundColor: "#ffffe0",
              marginTop: "15px",
              height: "50px",
            }}
          >
            <h4>My Bag items {numberOfItem}</h4>
          </div>
          <div className="container">
            {cartData.length
              ? cartData.map((e, index) => (
                  <div
                    style={{ border: "1px solid gray" }}
                    className="flex"
                    key={index}
                  >
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
                          handledec(e.id);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div style={{ padding: "5px" }}>
                      <button
                        onClick={() => {
                          // handleDelete(e._id);
                          setData([...cartData]);
                          dispatch(deleteCart(e._id));
                          dispatch(fetchCart())
                          alert("Product deleted")
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              : "SOMETHING WENT WRONG"}
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
              backgroundColor: "#ffa500",
              height: "50px",
            }}
          >
            <h4>Save Extra With Tribe{tribePrice}</h4>
          </div>
          <div
            style={{
              border: ".5px solid white",
              borderRadius: "1px 1px 1px 5px",
             
              height: "20px",
            }}
          >
            <h4>Price Summary</h4>
          </div>
          <h4 >Total Price: {totalPrice}</h4>
          <h4 > Discount: {discount}</h4>
          <h4> Delivery Price: {"Free"}</h4>
          <h4 >
            Payable Amount :{totalPrice - discount}
          </h4>

          <Box style={{ display: "flex" }}>
            <Button>
                Pay
            </Button>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;

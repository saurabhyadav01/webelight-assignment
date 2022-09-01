
import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { fetchCart } from "../Redux-toolkit/Cart-toolkit";
function Cart ()
{
    const data = useSelector((store)=>store.cart.data)
   // const { id } = useParams();
    const navigate=useNavigate();
  const dispatch=useDispatch()
    //console.log(data)
    useEffect(()=>
    {
       dispatch(fetchCart()) 
    },[])
return(
    <>
    <h4>cart</h4>
    </>
)
}

export default Cart
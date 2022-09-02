import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:false

}
export const fetchCart=createAsyncThunk("fetchCart" ,()=>{
    return  axios.get("https://web-elight.herokuapp.com/carts").then((res)=>{
       
        return res.data
    }).catch((err)=>{
        console.log(err.message)
    })
})

export const postCart=createAsyncThunk("postCart" ,(cartD)=>{
    return  axios.post("https://web-elight.herokuapp.com/carts",cartD).then((res)=>{
       
    alert("product added in cart")
        return res.data
    }).catch((err)=>{
        console.log(err.message);
     
    })
})
export const deleteCart=createAsyncThunk("deleteCart" ,(id)=>{
    return  axios.put(`https://web-elight.herokuapp.com/${id}`).then((res)=>{
       console.log("res.data")
        return res.data
    }).catch((err)=>{
        console.log(err.message);
     
    })
})

 export const deleteItem = (cart, id) => {

    let rest_cart_data = cart.filter((e) => e.id != id);
    console.log("cart after deleting data", cart.cartData);
    console.log("rest",rest_cart_data)
  
    return rest_cart_data;
  };

  export const addToCart = (cart, item) => {
     if(cart.cartData){
  
     }
    const temp = cart.cartData;
    let currentItem = { currentQuantity: 1, ...item };
    console.log("current updated item", currentItem);
    temp.push(currentItem);
    return temp;
  };
  
  export const incrementQuantity=(cart,id)=>{
  
    return cart.filter((e)=>e.id==id?e.currentQuantity++:e)
     
  }
  export const decrementQuantity=(id)=>{
    axios.get("https://web-elight.herokuapp.com/carts").then((res)=>{
       
      const d=res.data.filter((x)=>
      {
        return res.data.filter((e)=>e._id==id?e.currentQuantity++:e)
      })
       console.log("quantity",d)
    
       return d
     }).catch((err)=>{
         console.log(err.message)
     })
   
     
  }
  


const cartSlice= createSlice({
    name:"cart",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(fetchCart.pending,state=>{state.loading=true})
       builder.addCase(fetchCart.fulfilled, (state ,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=false
       })
      
  
       builder.addCase(fetchCart.rejected, (state)=>{
           state.loading=false
           state.data=[]
           state.error=true
       })
    }
})
export default cartSlice.reducer
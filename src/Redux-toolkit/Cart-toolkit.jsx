import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:false

}
export const fetchCart=createAsyncThunk("fetchCart" ,()=>{
    return  axios.get("http://localhost:5000/carts").then((res)=>{
         console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err.message)
    })
})
export const postCart=createAsyncThunk("fetchCart" ,(data)=>{
    return  axios.post("http://localhost:5000/carts",data).then((res)=>{
        // console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err.message);
        console.log(data)
    })
})



const cartSlice= createSlice({
    name:"product",
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
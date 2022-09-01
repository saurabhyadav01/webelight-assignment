import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:false

}
export const fetchCart=createAsyncThunk("user/fetchCart" ,()=>{
    return  axios.get("https://ecommrcebackend.herokuapp.com/products").then((res)=>{
        // console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err.message)
    })
})

const productSlice= createSlice({
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
export default productSlice.reducer
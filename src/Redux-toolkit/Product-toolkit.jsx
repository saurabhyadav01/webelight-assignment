import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:false

}
export const fetchProduct=createAsyncThunk("user/fetchProduct" ,()=>{
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
       builder.addCase(fetchProduct.pending,state=>{state.loading=true})
       builder.addCase(fetchProduct.fulfilled, (state ,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=false
       })
       builder.addCase(fetchProduct.rejected, (state)=>{
           state.loading=false
           state.data=[]
           state.error=true
       })
    }
})
export default productSlice.reducer
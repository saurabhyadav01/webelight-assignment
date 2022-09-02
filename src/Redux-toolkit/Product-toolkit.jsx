import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:false

}
export const fetchProduct=createAsyncThunk("fetchProduct" ,()=>{
    return  axios.get("http://localhost:5000/products").then((res)=>{
        console.log("res.data")
        return res.data
    }).catch((err)=>{
        console.log(err.message)
    })
})
export const category=createAsyncThunk("category" ,(e)=>{
    return  axios.get("https://web-elight.herokuapp.com/products").then((res)=>{
       //console.log(res.data,"sdsd",e)
     const d=res.data.filter((x)=>
     {
        if(x.category==e)
        {
            return x
        }
     })
      console.log(d)
      return d
    }).catch((err)=>{
        console.log(err.message)
    })
})
export const filterprice=createAsyncThunk("filterprice" ,(e)=>{
    return  axios.get("https://web-elight.herokuapp.com/products").then((res)=>{
       console.log(typeof(e))
     const d=res.data.filter((x)=>
     {
       if(+x.price< +e  )
       {
        return x
       }
       else if(+x.price< +e && +x.price>1000 )
       {
        return x
       }else if(+x.price>= 5000 )
       {
        return x
       }
     })
      console.log("price",d)
   
      return d
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
       builder.addCase(category.fulfilled, (state ,action)=>{
        state.loading=false
        state.data=action.payload
        state.error=false
   })
   builder.addCase(filterprice.fulfilled, (state ,action)=>{
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

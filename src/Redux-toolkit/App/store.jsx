import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Product-toolkit"
import reduxLogger from "redux-logger";
import cartReducer from "../Cart-toolkit"

export const store = configureStore({
  reducer: {
   product:productReducer,
   cart:cartReducer
  }
});
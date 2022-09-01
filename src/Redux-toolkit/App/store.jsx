import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Product-toolkit"
import reduxLogger from "redux-logger"

export const store = configureStore({
  reducer: {
   product:productReducer
  }
});
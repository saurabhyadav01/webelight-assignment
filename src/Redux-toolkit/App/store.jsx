import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Product-toolkit"
import reduxLogger from "redux-logger";

import CartReducer from "../Cart-toolkit"
const store = configureStore({
  reducer: {
   product:productReducer,
   cart:CartReducer
  }
});

export default store

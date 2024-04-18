import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice";
import cartReducer from "./Features/cartSlice";
import recentReducer from "./Features/recentSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    cartReducers: cartReducer,
    recentReducer: recentReducer,
  },
});

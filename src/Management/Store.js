import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice";
import cartReducer from "./Features/cartSlice";

const load = {
  products: undefined,
  auth: {
    isLoggedIn: false,
    user: null,
    authToken: null,
  },
};

export const store = configureStore({
  reducer: { authReducer: authReducer, cartReducer: cartReducer },
});

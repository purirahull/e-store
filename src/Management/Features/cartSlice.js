import { createSlice } from "@reduxjs/toolkit";

import { addProduct } from "../CartFunction";

console.log(localStorage.getItem("cart_items"));

const cart = {
  items: JSON.parse(localStorage.getItem("cart_items")) || [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: cart,
  reducers: {
    addCart: addProduct,
  },
});

export const { addCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

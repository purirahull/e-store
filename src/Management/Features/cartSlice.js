import { createSlice } from "@reduxjs/toolkit";

import { addProduct, emptyCart } from "../CartFunction";

const cart = {
  items: JSON.parse(localStorage.getItem("cart_items")) || [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: cart,
  reducers: {
    addCart: addProduct,
    clearCart: emptyCart,
  },
});

export const { addCart, clearCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";

import { addProduct } from "../CartFunction";

const cart = {
  items: [],
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

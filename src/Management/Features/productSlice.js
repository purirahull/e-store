import { createSlice } from "@reduxjs/toolkit";

const products = {
  list: null,
};

const productSlice = createSlice({
  name: "product",
  products,
  reducers: {
    getProducts: (state, actions) => {},
  },
});

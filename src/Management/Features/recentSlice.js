import { createSlice } from "@reduxjs/toolkit";
import { addRec } from "../RecentItems";

const recentArray = {
  items: [],
};

const recentSlice = createSlice({
  name: "Recent Items",
  initialState: recentArray,
  reducers: {
    addRecent: addRec,
  },
});

export const { addRecent } = recentSlice.actions;

const recentReducer = recentSlice.reducer;

export default recentReducer;

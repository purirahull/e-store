import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth";

export const store = configureStore({
  reducer: authReducer,
});

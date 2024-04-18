import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../Authmanagement";

const initialState = {
  isLoggedIn: localStorage.getItem("auth") ? true : false,
  user: null,
  authToken: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    userLogin: login,
    userLogout: logout,
  },
});

export const { userLogin, userLogout } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;

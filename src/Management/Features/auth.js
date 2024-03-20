import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../Authmanagement";

const initialState = {
  isLoggedIn: false,
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
export default authReducer = authSlice.reducer;

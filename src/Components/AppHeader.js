import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Management/Features/authSlice";
import { clearCart } from "../Management/Features/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";

import Cart from "./Views/Cart";

export default function AppHeader() {
  const data = useSelector((x) => x.cartReducers.items.length);

  const auth = useSelector((x) => x.authReducer.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar
        className="w-100"
        style={{ backgroundColor: "#004643" }}
        color="text-light"
      >
        <div className="d-flex justify-content-around align-items-center w-100">
          <NavLink to="home" className="ms-4">
            Home
          </NavLink>
          <NavLink to="products" className="ms-4">
            Products
          </NavLink>

          {auth ? (
            <button
              className="border-0 btn text-white text-decoration-none btn-link"
              onClick={() => dispatch(userLogout(), dispatch(clearCart()))}
            >
              Logout
            </button>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
          <div className="me-4">
            <Cart data={data} />
          </div>
        </div>
      </Navbar>
    </div>
  );
}

// https://fakestoreapi.com/

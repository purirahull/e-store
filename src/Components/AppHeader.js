import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Management/Features/authSlice";
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
    <div className="continer-fluid">
      <Navbar style={{ backgroundColor: "#004643" }} color="text-light">
        <Container fluid className="">
          <NavLink to="products">Products</NavLink>

          {auth ? (
            <button
              className="border-0 btn text-white text-decoration-none btn-link"
              onClick={() => dispatch(userLogout())}
            >
              Logout
            </button>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
          <div className="me-4">
            <Cart data={data} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

// https://fakestoreapi.com/

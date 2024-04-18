import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
    <div>
      <Navbar style={{ backgroundColor: "#004643" }} color="text-light">
        <Container className="">
          <NavLink to="products">Products</NavLink>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

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
          <div>
            <Cart data={data} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

// https://fakestoreapi.com/

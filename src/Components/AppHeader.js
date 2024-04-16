import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Management/Features/authSlice";
import { NavLink } from "react-router-dom";
import LoggedUser from "./Views/LoggedUser";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { CBadge, CButton } from "@coreui/react";
import Cart from "./Views/Cart";

export default function AppHeader() {
  const data = useSelector((x) => x.cartReducers.items.length);

  const auth = useSelector((x) => x.authReducer.isLoggedIn);

  console.log(auth);

  return (
    <div>
      <Navbar bg="light" color="text-light">
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
            <NavLink to="logout">Logout</NavLink>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
          <div>
            <Cart data={data} />
          </div>
        </Container>
      </Navbar>
      <hr className="m-0 p-0" />
    </div>
  );
}

// https://fakestoreapi.com/

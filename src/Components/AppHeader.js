import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Management/Features/authSlice";
import { NavLink } from "react-router-dom";
import LoggedUser from "./Views/LoggedUser";

export default function AppHeader() {
  const data = useSelector((x) => x.cartReducer.items.length);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="menu-list">
            <div>
              <NavLink to="/products"> Products </NavLink>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/categories"> Categories </NavLink>
            </div>
          </div>
          <div>
            <div>
              <NavLink to="/settings/roles"> Login </NavLink>
              <NavLink to="/settings/roles"> Logout </NavLink>
            </div>
          </div>
          <p className="text-white"> Cart {data}</p>
        </Container>
      </Navbar>
    </div>
  );
}

// https://fakestoreapi.com/

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">E Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#features">User</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

// https://fakestoreapi.com/

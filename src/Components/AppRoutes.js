import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Views/Homepage";
import AppContainer from "./Views/AppContainer";
import ProductList from "./Views/ProductList";
import ProductCard from "./Views/ProductCard";
import Categories from "./Views/Categories";
import Login from "./Views/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppContainer />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/login" element={<Login />} />

        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

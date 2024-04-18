import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecentItems from "./RecentItems";
import { Card, CardHeader } from "react-bootstrap";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import Categories from "./Categories";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <ProductCard />
      <Categories />
    </div>
  );
}

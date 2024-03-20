import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Row,
} from "react-bootstrap";

export default function Categories() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const { get, response } = useFetch();

  useEffect(() => {
    fetchPropducts();
  }, []);

  async function fetchPropducts() {
    const endpoint = await get(`/categories`);
    console.log(endpoint);

    console.log(response.ok);
    if (response.ok) {
      console.log(endpoint);
      setProducts(endpoint);
      console.log(products);
    }
  }

  return (
    <>
      <Row className="text-center ms-2"> Categories</Row>
      <div className="row">
        {products.map((items) => (
          <Card
            key={items.id}
            className="col-sm-4 col-lg-2  m-3 border-0 rounded-1  d-flex  shadow-lg"
          >
            <NavLink to={`${items.id}`}>
              <CardImg
                className="card_image"
                src={items?.image}
                style={{ width: "200px;", height: "200px", objectFit: "cover" }}
              />

              <CardHeader className="text-success">{items.name}</CardHeader>

              <CardFooter>
                <Button className="text-center btn-secondary m-1 w-100 align-items-end">
                  Purchase
                </Button>
              </CardFooter>
            </NavLink>
          </Card>
        ))}
      </div>
    </>
  );
}

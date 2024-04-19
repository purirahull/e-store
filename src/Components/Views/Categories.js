import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardImg,
  Row,
} from "react-bootstrap";

export default function Categories() {
  // const [loading, setLoading] = useState(false);
  // const [errors, setErrors] = useState(false);

  const [products, setProducts] = useState([]);
  // const { categoryId } = useParams();

  const { get, response } = useFetch();

  useEffect(() => {
    fetchPropducts();
  }, []);

  async function fetchPropducts() {
    const endpoint = await get(`/categories`);

    if (response.ok) {
      setProducts(endpoint);
    }
  }

  return (
    <>
      <Row className="text-start ms-2 ">
        <em> Categories</em>
      </Row>
      <div className="row  container-fluid">
        {products?.slice(0, 5)?.map((items) => (
          <Card
            key={items.id}
            className="col-sm-4 col-lg-2  m-3 border-0 rounded-1  d-flex  shadow-lg"
          >
            <NavLink className="w-100">
              <div
                style={{
                  height: "190px",
                }}
              >
                <CardImg
                  className="card_image mt-2"
                  src={items?.image}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <CardHeader className="text-success mt-2">
                {items.name}
              </CardHeader>
            </NavLink>
          </Card>
        ))}
      </div>
    </>
  );
}

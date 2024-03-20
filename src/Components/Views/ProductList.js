import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardImg,
  Row,
} from "react-bootstrap";

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const [products, setProducts] = useState([]);

  const { get, response } = useFetch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pagintedData, setPaginatedData] = useState([]);
  const [pagination, setPagination] = useState(10);
  const [initial, setInitial] = useState(0);
  const [length, setLength] = useState();

  useEffect(() => {
    fetchPropducts();
  }, []);

  async function fetchPropducts() {
    const endpoint = await get("/products");

    console.log(response.ok);
    if (response.ok) {
      setProducts(endpoint);
      setLength(Math.floor(products.length / 10));
    }
  }
  console.log(localStorage.getItem("auth"));
  const handlepagination = (index) => {
    console.log(index);
    setInitial(index);
    setPagination(index + 10);

    console.log(initial, pagination);
  };

  return (
    <>
      <Row> Products</Row>
      <div className="row">
        {products.slice(initial, pagination)?.map((items) => (
          <Card
            key={items.id}
            className="col-sm-4 col-lg-2  m-3 border-0 rounded-1  d-flex  shadow-lg"
          >
            <NavLink to={`${items.id}`}>
              <CardImg
                className="card_image"
                src={items?.images[0]}
                alt="NA"
                style={{ width: "200px;", height: "200px", objectFit: "cover" }}
              />

              <CardHeader className="text-success">{items.title}</CardHeader>

              <CardFooter>
                <Button className="text-center btn-secondary m-1 w-100 align-items-end">
                  Purchase
                </Button>
              </CardFooter>
            </NavLink>
          </Card>
        ))}
      </div>

      <nav className="fixed-bottom    mt=3 d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={() =>
                initial > 0 ? handlepagination(initial - 10) : null
              }
              className="page-link border0 mx-1 shadow-lg text-info"
            >
              {`<`}
            </button>
          </li>

          {Array.from({ length: products.length / 10 }, (_, index) => (
            <div key={index}>
              <li className="page-item">
                <button
                  onClick={() => handlepagination(index * 10)}
                  className="page-link border0 mx-1 shadow-lg text-info"
                >
                  {index + 1}
                </button>
              </li>
            </div>
          ))}
          <div>
            <li className="page-item">
              <button
                onClick={() => handlepagination(initial + 10)}
                className="page-link border0 mx-1 shadow-lg text-info"
              >
                {`>`}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

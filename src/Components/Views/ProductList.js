import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Row,
} from "react-bootstrap";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addCart } from "../../Management/Features/cartSlice";
import emptyImage from "./empty.png";
import { freeSet } from "@coreui/icons";

import CIcon from "@coreui/icons-react";

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

    console.log(endpoint);
    if (response.ok) {
      setProducts(endpoint);
      setLoading(false);
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
  const dispatch = useDispatch();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="row mb-5">
            {products.slice(initial, pagination)?.map((items) => (
              <Card
                key={items.id}
                className="col-sm-4 col-lg-2  m-3 p-0 border-0 rounded-1  d-flex  shadow-lg"
              >
                <NavLink to={`${items.id}`}>
                  <CardImg
                    className="card_image rounded-0"
                    src={items?.images[1] || emptyImage}
                    alt="NA"
                    style={{
                      // width: "220px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <CardHeader className="text-success fw-light">
                    {items.title}
                  </CardHeader>
                </NavLink>

                <CardBody className="px-2">
                  <div className="row p-0 m-0">
                    <div className="col text-secondary text-nowrap ">
                      Price: {items?.price} $
                    </div>
                    <div className="col"></div>
                  </div>

                  <Button
                    className="m-0 w-100 bg-secondary rounded-0 border-0"
                    onClick={() => dispatch(addCart(items))}
                  >
                    Add to cart
                  </Button>
                </CardBody>
                <CardFooter>
                  {/* <Button className="text-center btn-secondary m-1 w-100 align-items-end">
                    Purchase
                  </Button> */}
                </CardFooter>
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
        </div>
      )}
    </>
  );
}

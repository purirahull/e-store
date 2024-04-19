import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardImg } from "react-bootstrap";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addCart } from "../../Management/Features/cartSlice";
import emptyImage from "./empty.png";
export default function ProductList() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const { get, response } = useFetch();

  const [pagination, setPagination] = useState(10);
  const [initial, setInitial] = useState(0);
  const [length, setLength] = useState();

  useEffect(() => {
    fetchPropducts();
  }, []);

  async function fetchPropducts() {
    const endpoint = await get("/products");

    if (response.ok) {
      setProducts(endpoint);
      setLoading(false);
      setLength(Math.floor(products.length / 10));
    }
  }
  const handlepagination = (index) => {
    setInitial(index);
    setPagination(index + 10);
  };
  const dispatch = useDispatch();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid mt-3">
          <div className="row mb-5 container-fluid d-flex justify-content-center">
            {products.slice(initial, pagination)?.map((items) => (
              <Card
                key={items.id}
                className="col-sm-4 col-lg-2   m-3 p-0 border-0 rounded-1  d-flex justify-content-center  shadow-lg"
              >
                <NavLink to={`${items.id}`}>
                  <CardImg
                    className="card_image rounded-1"
                    src={items?.images[1] || emptyImage}
                    alt="NA"
                    style={{
                      // width: "220px",
                      height: "190px",
                      objectFit: "cover",
                    }}
                  />

                  <CardHeader className="text-success fw-light">
                    {items?.title?.slice(0, 20)}
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

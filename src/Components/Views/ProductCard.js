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
import Categories from "./Categories";
import LoggedUser from "./LoggedUser";
import Loading from "./Loading";
export default function ProductCard() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [next, setNext] = useState(0);

  const { id } = useParams();

  const [products, setProducts] = useState({});

  const { get, response } = useFetch();
  async function fetchPropducts() {
    const endpoint = await get(`/products/${id}`);
    console.log(endpoint);

    console.log(response.ok);
    if (response.ok) {
      setProducts(endpoint);
      setLoading(false);
    }
  }
  console.log(next);
  useEffect(() => {
    fetchPropducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div class="card mt-4">
          <div class="card-body p-2">
            <div className="text-end d-flex justify-content-end">
              <NavLink to={`/categories/${products?.category?.id}`}>
                <button className="border-0 bg-danger text-white ">
                  {products?.category?.name}
                </button>
              </NavLink>
            </div>
            <div className="row">
              <div className="col-3">
                <img class="col-12" src={products?.images?.[next]} />
                <button
                  className="border-0 text-center"
                  onClick={() => (next <= 1 ? setNext(next + 1) : setNext(0))}
                >
                  Next
                </button>
              </div>
              <div className="col-8 mt-3">
                <h5 class="card-title">{products?.title}</h5>
                <p className="mt-2 text-secondary">{products?.description}</p>
                <div className="mt-5">
                  <a href="#" class="card-link ">
                    Add to Card
                  </a>
                  <a href="#" class="card-link">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row bg-white mt-3"></div>
      <LoggedUser />

      <Categories />
    </>
  );
}

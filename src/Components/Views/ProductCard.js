import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink, useParams } from "react-router-dom";

import Categories from "./Categories";
import LoggedUser from "./LoggedUser";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCart } from "../../Management/Features/cartSlice";
export default function ProductCard() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [next, setNext] = useState(0);

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const authCheck = useSelector((state) => state.authReducer.isLoggedIn);
  useSelector((s) => console.log(s));

  const { get, response } = useFetch();
  async function fetchPropducts() {
    const endpoint = await get(`/products/${id}`);
    console.log(response);

    if (response.ok) {
      setProduct(endpoint);
      setLoading(false);
    } else {
      toast.error("Unable to load Data");
    }
  }
  useEffect(() => {
    fetchPropducts();
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div class="card mt-4">
          <div class="card-body p-2">
            <div className="text-end d-flex justify-content-end">
              <NavLink to={`/categories/${product?.category?.id}`}>
                <button className="border-0 bg-danger text-white ">
                  {product?.category?.name}
                </button>
              </NavLink>
            </div>
            <div className="row">
              <div className="col-3">
                <img
                  class="col-12 rounded-2 shadow-lg"
                  src={product?.images?.[next]}
                />
                <button
                  className="border-0 text-center"
                  onClick={() => (next <= 1 ? setNext(next + 1) : setNext(0))}
                >
                  Next
                </button>
              </div>
              <div className="col-8 mt-3">
                <h5 class="card-title">{product?.title}</h5>
                <p className="mt-2 text-secondary">{product?.description}</p>
                <div className="mt-5">
                  <button onClick={() => dispatch(addCart(product))}>
                    Add to cart
                  </button>
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

      {/* <Categories /> */}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import LoggedUser from "./LoggedUser";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCart } from "../../Management/Features/cartSlice";
import { addRecent } from "../../Management/Features/recentSlice";
import RecentItems from "./RecentItems";
export default function ProductCard() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [next, setNext] = useState(0);

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const authCheck = useSelector((state) => state.authReducer.isLoggedIn);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { get, response } = useFetch();
  async function fetchPropducts() {
    const endpoint = await get(`/products/${id}`);
    console.log(endpoint);

    if (response.ok) {
      setProduct(endpoint);
      setLoading(false);
      dispatch(addRecent(endpoint));
    } else if (response.ok) {
      toast.error("Unable to load Data");
    }
  }
  useEffect(() => {
    fetchPropducts();
  }, [id]);

  // useEffect(() => {
  //   if (authCheck) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card mt-2 rounded-0 border-0 ">
          <div className="card-body p-2 mb-4">
            <div className="text-end d-flex justify-content-end">
              <NavLink to={`/categories/${product?.category?.id}`}>
                <button className="border-0 bg-danger text-white ">
                  {product?.category?.name}
                </button>
              </NavLink>
            </div>
            <div className="d-flex row ">
              <div className="col-3 d-flex">
                <button
                  className="border-0 text-center    btn"
                  onClick={() => (next > 1 ? setNext(next - 1) : setNext(0))}
                >
                  ◄
                </button>
                <img
                  className="col-12 rounded-2 shadow-lg"
                  src={product?.images?.[next]}
                ></img>
                <button
                  className="border-0 text-center btn"
                  onClick={() => (next <= 1 ? setNext(next + 1) : setNext(0))}
                >
                  ►
                </button>
              </div>
              <div className="col-8 mt-3 ms-5">
                <h5 className="card-title ">{product?.title}</h5>
                <p className="mt-2 text-secondary ">{product?.description}</p>
                <div className="mt-5">
                  <button
                    className="btn btn-secondary mx-1"
                    onClick={() => dispatch(addCart(product))}
                  >
                    Add to cart
                  </button>

                  <button
                    className="btn btn-secondary mx-1"
                    onClick={() => dispatch(addCart(product))}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row bg-white mt-3"></div>
      <LoggedUser />
      <RecentItems />
    </>
  );
}

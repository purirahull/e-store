import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import LoggedUser from "./LoggedUser";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCart } from "../../Management/Features/cartSlice";
import { addRecent } from "../../Management/Features/recentSlice";
import RecentItems from "./RecentItems";
import emptyImage from "./empty.png";

export default function ProductCard() {
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(0);

  const { id } = useParams();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18, 19, 22, 23];

  const fallbackId = items[Math.floor(Math.random() * items.length)];

  const [product, setProduct] = useState({});

  // const authCheck = useSelector((state) => state.authReducer.isLoggedIn);

  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const { get, response } = useFetch();
  async function fetchPropducts() {
    const endpoint = await get(`/products/${id ? id : fallbackId}`);

    if (response.ok) {
      setProduct(endpoint);
      setLoading(false);
      dispatch(addRecent(endpoint));
    } else if (response.ok) {
      toast.error("Unable to load Data");
    }
  }

  console.log(loading);
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
        <div className="container mb-5">
          <div className="card-text placeholder-glow mt-5">
            <div className="row">
              <div className="col-4 col-sm-6">
                <span className="placeholder p-5  w-100"></span>
                <span className="placeholder p-5  w-100"></span>
              </div>
              <div className="col">
                <span className="placeholder p-1 w-100  col-8"></span>
                <span className="placeholder p-1 w-100  col-8"></span>
                <span className="placeholder p-1 w-100  col-8"></span>
                <br />
                <br />
                <span className="placeholder col-5 "></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card mt-2 rounded-0 border-0 ">
          <div className="card-body p-2 mb-4">
            <div className="text-end d-flex justify-content-end">
              <NavLink to={`/categories/${product?.category?.id}`}>
                <button className="border-0  mb-2 bg-danger text-white ">
                  {product?.category?.name}
                </button>
              </NavLink>
            </div>
            <div className="d-flex row container-fluid">
              <div className="col-sm-12 col-lg-3  d-flex">
                <button
                  className="border-0 text-center p-0 m-0   btn"
                  onClick={() => (next > 1 ? setNext(next - 1) : setNext(0))}
                >
                  ◄
                </button>
                <img
                  className="col-12 col-sm-12 rounded-2 shadow-lg"
                  src={product?.images?.[next] || emptyImage}
                ></img>
                <button
                  className="border-0 text-center btn p-0 m-0"
                  onClick={() => (next <= 1 ? setNext(next + 1) : setNext(0))}
                >
                  ►
                </button>
              </div>
              <div className="col-lg-8  col-sm-12 mt-3 ms-4">
                <h5 className="card-title ">{product?.title}</h5>
                <p className="mt-2 text-secondary text-justify ">
                  {product?.description}
                </p>
                <div className="mt-5 d-flex">
                  <button
                    className="btn btn-secondary mx-1 text-nowrap"
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
      <div className="container">
        <RecentItems />
      </div>
    </>
  );
}

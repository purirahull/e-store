import React from "react";

export default function Loading() {
  return (
    <div className=" mt-5 d-flex justify-content-center  p-5">
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
    </div>
  );
}

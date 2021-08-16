import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const data = useParams();
  console.log(data);

  return (
    <div className="py-20">
      <h1>Single Product</h1>
      <p>Product id = {data.productid}</p>
    </div>
  );
};

export default SingleProduct;

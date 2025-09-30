import React from "react";
import Home from "../page";
import ProductView from "./ProductView";

const Product = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  return (
    <div className="">
      <Home />
      <div className="mt-5">
        <ProductView data={data} />
      </div>
    </div>
  );
};

export default Product;

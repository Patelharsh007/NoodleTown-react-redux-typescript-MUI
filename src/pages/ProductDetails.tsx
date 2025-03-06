import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDetailsCompo from "../components/ProductDetailsCompo";

const ProductDetails = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Navbar linkColor="#000000" />
      <ProductDetailsCompo id={id} />
    </>
  );
};

export default ProductDetails;

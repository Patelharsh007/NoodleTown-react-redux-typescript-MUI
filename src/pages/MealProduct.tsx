import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const MealProduct = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar linkColor="#000000" />
      <>{id}</>
    </>
  );
};

export default MealProduct;

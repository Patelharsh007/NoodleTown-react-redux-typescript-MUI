import React from "react";
import Navbar from "../components/Navbar";
import Restaurant from "../components/Restaurant";
import RestaurantOrderOnline from "../components/RestaurantOrderOnline";
import { Navigate, useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar linkColor="#000000" />
      <Restaurant id={id} />
      <RestaurantOrderOnline id={id} />
    </>
  );
};

export default RestaurantPage;

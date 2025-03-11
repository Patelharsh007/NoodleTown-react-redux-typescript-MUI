import React from "react";
import Navbar from "../components/Navbar";
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantOrderOnline from "../components/RestaurantOrderOnline";
import { Navigate, useParams } from "react-router-dom";
import RestaurantBanner from "../components/RestaurantBanner";
import RestaurantMenu from "../components/RestaurantMenu";

const RestaurantPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar linkColor="#000000" />
      <RestaurantBanner id={id} />
      <RestaurantDetail id={id} />
      <RestaurantMenu id={id} />
      <RestaurantOrderOnline id={id} />
    </>
  );
};

export default RestaurantPage;

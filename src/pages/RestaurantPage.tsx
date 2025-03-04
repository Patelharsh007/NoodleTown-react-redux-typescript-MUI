import React from "react";
import Navbar from "../components/Navbar";
import Restaurant from "../components/Restaurant";
import RestaurantOrderOnline from "../components/RestaurantOrderOnline";

const RestaurantPage = () => {
  return (
    <>
      <Navbar linkColor="#000000" />
      <Restaurant />
      <RestaurantOrderOnline />
    </>
  );
};

export default RestaurantPage;

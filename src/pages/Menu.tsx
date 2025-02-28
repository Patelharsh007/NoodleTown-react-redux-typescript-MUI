import React from "react";

import Navbar from "../components/Navbar";
import TopBrands from "../components/TopBrands";
import FoodByWeather from "../components/FoodByWeather";
import FoodCategoryGroup from "../components/FoodCategoryGroup";

const Menu = () => {
  return (
    <>
      <Navbar linkColor="#000000" />
      <TopBrands />
      <FoodByWeather />
      <FoodCategoryGroup />
    </>
  );
};

export default Menu;

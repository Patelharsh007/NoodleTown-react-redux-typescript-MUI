import React from "react";

import HeroSection from "../components/HeroSection";
import DiningOut from "../components/DiningOut";
import BestDelievered from "../components/BestDelievered";
import ItemCarosuel from "../components/ItemCarosuel";
import PizzaBanner from "../components/PizzaBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DiningOut />
      <BestDelievered />
      <ItemCarosuel />
      <ItemCarosuel />
      <PizzaBanner />
      <ItemCarosuel />
      <ItemCarosuel />
    </>
  );
};

export default Home;

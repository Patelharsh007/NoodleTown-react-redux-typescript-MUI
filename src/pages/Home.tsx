import React from "react";

import HeroSection from "../components/HeroSection";
import DiningOut from "../components/DiningOut";
import BestDelievered from "../components/BestDelievered";
import ItemCarosuel from "../components/ItemCarosuel";
import HomePageImages from "../components/HomePageImages";
import InstagramBox from "../components/InstagramBox";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DiningOut />
      <BestDelievered />
      <ItemCarosuel />
      <HomePageImages />
      <InstagramBox />
      <Footer />
    </>
  );
};

export default Home;

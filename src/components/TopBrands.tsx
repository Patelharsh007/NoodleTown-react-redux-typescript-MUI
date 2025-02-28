import React from "react";
import { Box, Typography } from "@mui/material";
import TopBrandUI from "../UI/TopBrandUI";

type brands = {
  brandName: string;
  brandIcon: string;
}[];

const DUMMY_BRAND_DATA: brands = [
  {
    brandName: "COFFEE CULTURE",
    brandIcon: "/images/Menu/brands/brand2.png",
  },
  {
    brandName: "KFC",
    brandIcon: "/images/Menu/brands/brand3.png",
  },
  {
    brandName: "Burger King",
    brandIcon: "/images/Menu/brands/brand4.png",
  },
  {
    brandName: "Starbucks",
    brandIcon: "/images/Menu/brands/brand5.png",
  },
  {
    brandName: "McDonald's",
    brandIcon: "/images/Menu/brands/brand6.png",
  },
  {
    brandName: "La Pino'z Pizza",
    brandIcon: "/images/Menu/brands/brand1.png",
  },
];

const TopBrands = () => {
  return (
    <>
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"} marginTop={"30px"}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "32px" }}
          lineHeight={{ xs: "40px", sm: "48px" }}
          letterSpacing={"0%"}
        >
          Top brands for you
        </Typography>

        <Box
          margin={"30px auto"}
          padding={"auto 30px"}
          display={"flex"}
          gap={{ xs: "45px", sm: "65px", md: "75px" }}
          height={{ xs: "170px", sm: "250px", md: "300px" }}
          sx={{
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "thin",
            overscrollBehaviorX: "contain",
            scrollbarColor: "#f8f8f8 transparent",
            "&::-webkit-scrollbar-button": {
              display: "none",
            },
          }}
        >
          {/* Rendering all brands */}
          {DUMMY_BRAND_DATA.map((brand) => (
            <TopBrandUI brands={brand} key={brand.brandName} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TopBrands;

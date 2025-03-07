import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TopBrandUI from "../UI/TopBrandUI";

import restaurants from "../data/restaurantsData";

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

            "&:hover": {
              sm: { cursor: restaurants.length > 3 ? "grabbing" : "default" },
              md: {
                cursor: restaurants.length > 4 ? "grabbing" : "default",
              },
            },
            "&:active": {
              sm: { cursor: restaurants.length > 3 ? "grabbing" : "default" },
              md: {
                cursor: restaurants.length > 4 ? "grabbing" : "default",
              },
            },
          }}
        >
          {/* Rendering all brands */}
          {restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TopBrandUI
                restaurant={{
                  title: restaurant.title,
                  id: restaurant.id,
                  logo: restaurant.logo,
                }}
                key={restaurant.id}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TopBrands;

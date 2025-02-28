import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

import FoodByWeatherCard from "../UI/FoodByWeatherCard";

type foodByWeatherType = {
  foodName: string;
  foodTime: string;
  foodImage: string;
};

const DUMMY_FOOD_BY_WEATHER_DATA: foodByWeatherType[] = [
  {
    foodName: "Vadapav",
    foodTime: "20 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather1.png",
  },
  {
    foodName: "Panipuri",
    foodTime: "20 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather2.png",
  },
  {
    foodName: "Pav Bhaji",
    foodTime: "30 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather3.png",
  },
  {
    foodName: "Ice-Cream",
    foodTime: "20 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather4.png",
  },
  {
    foodName: "Sandwich",
    foodTime: "20 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather5.png",
  },
  {
    foodName: "Pizza",
    foodTime: "40 Min",
    foodImage: "/images/Menu/foodWeather/foodWeather6.png",
  },
];

const FoodByWeather = () => {
  return (
    <>
      <Box
        maxWidth={"1600px"}
        width={"90%"}
        margin={"auto"}
        marginTop={"50px"}
        padding={"10px"}
      >
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "32px" }}
          lineHeight={{ xs: "40px", sm: "48px" }}
          letterSpacing={"0%"}
        >
          Food according to Weather
        </Typography>

        <Grid2
          container
          spacing={{ xs: "20px", sm: "40px", md: "50px" }}
          marginY={"50px"}
        >
          {DUMMY_FOOD_BY_WEATHER_DATA.map((food) => (
            <FoodByWeatherCard Card={food} key={food.foodName} />
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default FoodByWeather;

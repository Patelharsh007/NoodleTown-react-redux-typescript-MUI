import { Grid2, Box, Stack, Typography } from "@mui/material";
import React from "react";

type foodByWeatherCardProp = {
  Card: { foodName: string; foodTime: string; foodImage: string };
};

const FoodByWeatherCard = (props: foodByWeatherCardProp) => {
  return (
    <Grid2 size={{ xs: 6, sm: 4 }}>
      <Box
        component={"img"}
        src={props.Card.foodImage}
        alt={"food-by-weather"}
        height={{ xs: "200px", sm: "220px", md: "260px" }}
        width={"100%"}
        borderRadius={"13px"}
        sx={{
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />
      <Stack mt={"20px"}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={600}
          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
          lineHeight={{ xs: "18px", sm: "22px", md: "30px" }}
          letterSpacing={"0%"}
          color={"#000000"}
          sx={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        >
          {props.Card.foodName}
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={600}
          fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
          lineHeight={{ xs: "16px", sm: "20px", md: "24px" }}
          letterSpacing={"0%"}
          color={"#999999"}
        >
          {props.Card.foodTime}
        </Typography>
      </Stack>
    </Grid2>
  );
};

export default FoodByWeatherCard;

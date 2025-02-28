import { Stack, Box, Typography } from "@mui/material";
import React from "react";

type topBrandUiProp = {
  brands: { brandName: string; brandIcon: string };
};

const TopBrandUI = (props: topBrandUiProp) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      width={"auto"}
      height={"auto"}
    >
      <Box
        component={"img"}
        src={props.brands.brandIcon}
        alt={props.brands.brandName}
        width={{ xs: "100px", sm: "150px", md: "187px" }}
        height={{ xs: "100px", sm: "150px", md: "186px" }}
      />
      <Typography
        marginTop={{ xs: "25px", sm: "40px", md: "50px" }}
        fontFamily={"Poppins"}
        fontWeight={600}
        fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
        lineHeight={{ xs: "22px", sm: "27px", md: "30px" }}
        letterSpacing={"0%"}
      >
        {props.brands.brandName}
      </Typography>
    </Stack>
  );
};

export default TopBrandUI;

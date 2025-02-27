import { Box, Typography } from "@mui/material";
import React from "react";

const ReceipeHeader = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={"/images/Pizza/vector1.png"}
          width={{ xs: "100px", sm: "150px" }}
        />
        <Typography
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={{ xs: "40px", sm: "48px" }}
          lineHeight={{ xs: "50px", sm: "58.09px" }}
          letterSpacing={"0%"}
          textAlign={"center"}
        >
          Popular Recipes
        </Typography>
        <Box
          component={"img"}
          src={"/images/Pizza/vector2.png"}
          width={{ xs: "100px", sm: "150px" }}
          height={{ xs: "120px", sm: "160px", lg: "180px" }}
        />
      </Box>
    </>
  );
};

export default ReceipeHeader;
<section id="popular-recepies-header-class">
  <img id="img1" src="images/Pizza/vector1.png" alt="" />
  <p id="popular-recepie-heading">Popular Recipes</p>
  <img id="img2" src="images/Pizza/vector2.png" alt="" />
</section>;

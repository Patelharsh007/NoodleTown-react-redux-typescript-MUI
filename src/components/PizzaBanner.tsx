import { Box, Typography } from "@mui/material";
import React from "react";

const PizzaBanner = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("../images/bannerPizza.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          width: "100%",
          height: "538px",
          zIndex: 1,

          "&::before": {
            content: '""',
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "538px",
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            margin: "auto",
            paddingTop: "197px",
            paddingLeft: { xs: "30px", sm: "50px", md: "70px" },
          }}
        >
          <Typography
            fontFamily={"Poppins"}
            fontSize={{ xs: "40px", sm: "48px" }}
            fontWeight={700}
            lineHeight={{ xs: "60px", sm: "72px" }}
            textAlign={"left"}
            color="white"
            sx={{ width: { xs: "270px", sm: "570px" } }}
          >
            Fastest Food <span style={{ color: "#ffc300" }}>Delivery</span> in
            the town
          </Typography>
        </Box>
      </Box>
    </>
  );
  //   width: 570px;
  //     font-family: "Poppins", serif;
  //     font-size: 48px;
  //     font-weight: 700;
  //     line-height: 72px;
  //     text-align: left;
};

export default PizzaBanner;

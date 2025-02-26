import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BestDelieveredBox from "../UI/BestDelieveredBox";

type dummy_best_delieverd_data = {
  imageurl: string;
  title: string;
}[];

const DUMMY_BEST_DELIEVERED_DATA: dummy_best_delieverd_data = [
  {
    imageurl: "/images/Best_Delievered/img1.jpeg",
    title: "Chicken Noodles",
  },
  {
    imageurl: "/images/Best_Delievered/img2.jpeg",
    title: "French Fries",
  },
  {
    imageurl: "/images/Best_Delievered/img3.jpeg",
    title: "Avacado Mint Noodles",
  },
];

const BestDelievered = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "block" },
          padding: "20px",
          margin: " 30px auto",
          maxWidth: "1400px",
        }}
      >
        <Stack sx={{ padding: "20px 20px", margin: "50px 20px" }}>
          <Typography
            fontFamily={"Poppins"}
            fontSize={"48px"}
            fontWeight={700}
            lineHeight={"72px"}
            letterSpacing={0}
            sx={{ color: "#ffc300", textAlign: "left" }}
          >
            Our best delivered cuisines
          </Typography>
          <Typography
            fontFamily={"Poppins"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"24px"}
            letterSpacing={0}
            sx={{ textAlign: "left" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </Stack>

        <Box
          id="best-delievered-container"
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",

            "& > :nth-child(1)::after,& > :nth-child(2)::after": {
              content: '""',
              position: "absolute",
              top: { sm: "100%", md: "40%" },
              left: { sm: "0%", md: "0%", lg: "105%", xl: "110%" },
              width: { sm: "100%", md: "0%", lg: "50%", xl: "90%" },
              height: "2px",
              backgroundColor: "#ffc300",
              zIndex: -1,
            },
          }}
        >
          {DUMMY_BEST_DELIEVERED_DATA.map((item) => {
            return <BestDelieveredBox box={item} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default BestDelievered;

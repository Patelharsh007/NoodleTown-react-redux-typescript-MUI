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
      <div>Best-Delievered-Started</div>

      <Stack sx={{ padding: "20px", margin: "50px" }}>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"48px"}
          fontWeight={700}
          lineHeight={"72px"}
          letterSpacing={0}
          sx={{ color: "#ffc300", textAlign: "center" }}
        >
          Our best delivered cuisines
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"16px"}
          fontWeight={400}
          lineHeight={"24px"}
          letterSpacing={0}
          sx={{ textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </Typography>
      </Stack>

      <Box
        id="best-delievered-container"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <>
          {DUMMY_BEST_DELIEVERED_DATA.map((item) => {
            return <BestDelieveredBox box={item} />;
          })}
        </>
      </Box>
    </>
  );
};

export default BestDelievered;

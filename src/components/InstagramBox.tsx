import { Box, Grid2 } from "@mui/material";
import React from "react";

const InstagramBox = () => {
  return (
    <>
      <Box
        maxWidth={"1600px"}
        width={"90%"}
        margin={"auto"}
        padding={{ xs: "30px", sm: "40px" }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "99%",
              background: "rgba(0, 0, 0, 0.2)",
              zIndex: 3,
            },
          }}
        >
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img1.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img2.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img3.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img4.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img5.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={4}>
            <Box
              component={"img"}
              src={"/images/InstaBox/img6.jpg"}
              alt="Pizza-Image"
              height={{ sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid2>
        </Grid2>
        {/* <Box
          sx={{
            maxWidth: "1400px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "24px", // Adds equal gap between rows and columns

            position: "relative",

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "17px",
              background: "rgba(0, 0, 0, 0.2)",
              zIndex: 1,
            },
          }}
        >
          <Box
            component={"img"}
            src={"/images/InstaBox/img1.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
          <Box
            component={"img"}
            src={"/images/InstaBox/img2.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
          <Box
            component={"img"}
            src={"/images/InstaBox/img3.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
          <Box
            component={"img"}
            src={"/images/InstaBox/img4.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
          <Box
            component={"img"}
            src={"/images/InstaBox/img5.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
          <Box
            component={"img"}
            src={"/images/InstaBox/img6.jpg"}
            alt="Pizza-Image"
            height={"300px"}
            width={"100%"}
          />
        </Box> */}
      </Box>
    </>
  );
};

export default InstagramBox;

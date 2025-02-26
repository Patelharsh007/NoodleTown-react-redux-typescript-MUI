import { Box } from "@mui/material";
import React from "react";

const InstagramBox = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "24px", // Adds equal gap between rows and columns
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
      </Box>
    </>
  );
};

export default InstagramBox;

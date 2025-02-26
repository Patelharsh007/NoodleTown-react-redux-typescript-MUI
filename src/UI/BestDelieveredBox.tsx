import { Box, Typography } from "@mui/material";
import React from "react";

type BestDelieveredBoxProps = {
  box: { imageurl: string; title: string };
};

const BestDelieveredBox = (props: BestDelieveredBoxProps) => {
  return (
    <>
      <Box
        id="best-deivered-box"
        sx={{
          width: "246px",
          height: "317px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          backgroundColor: "#f3f3f3",
        }}
      >
        <img
          src={props.box.imageurl}
          alt={props.box.title}
          style={{
            width: "246px",
            height: "246px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Typography
          fontFamily={"Poppins"}
          fontSize={"20px"}
          fontWeight={600}
          lineHeight={"30px"}
          letterSpacing={0}
          textAlign={"center"}
        >
          {props.box.title}
        </Typography>
      </Box>
    </>
  );
};

export default BestDelieveredBox;

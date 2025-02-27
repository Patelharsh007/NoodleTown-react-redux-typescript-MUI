import React from "react";
import { Typography, Box } from "@mui/material";

type DiningOutProps = {
  Card: { imgurl: string; heading: string; statement: string };
};

const DiningOutCard = (props: DiningOutProps) => {
  return (
    <>
      <Box
        width={{ xs: "280px", sm: "343px" }}
        height={{ xs: "163px", sm: "200px" }}
        borderRadius={"8px"}
        boxShadow={"0px 4px 4px 0px #0000001A"}
        sx={{
          backgroundColor: "#fffff",
        }}
      >
        <Box
          component="img"
          src={props.Card.imgurl}
          alt={props.Card.heading}
          height={{ xs: "100px", sm: "126px" }}
          width={{ xs: "280px", sm: "343px" }}
          borderRadius={"8px 8px 0px 0px"}
          sx={{
            objectFit: "cover",
          }}
        />
        <Typography
          paddingLeft={{ xs: "13px", sm: "15px" }}
          paddingTop={"9px"}
          fontFamily={"Poppins"}
          fontWeight={400}
          fontSize={{ xs: "14px", sm: "16px" }}
          lineHeight={"24px"}
          letterSpacing={"0%"}
          color={"#000000"}
        >
          {props.Card.heading}
        </Typography>
        <Typography
          paddingLeft={{ xs: "13px", sm: "15px" }}
          paddingBottom={"20px"}
          fontFamily={"Poppins"}
          fontWeight={300}
          fontSize={{ xs: "12px", sm: "14px" }}
          lineHeight={"21px"}
          letterSpacing={"0%"}
          color={"#000000"}
        >
          {props.Card.statement}
        </Typography>
      </Box>
    </>
  );
};

export default DiningOutCard;

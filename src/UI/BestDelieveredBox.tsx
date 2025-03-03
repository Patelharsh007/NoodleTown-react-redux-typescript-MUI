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
        width={"246px"}
        height={"317px"}
        padding={{ sm: "30px", md: "10px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Box
          component={"img"}
          src={props.box.imageurl}
          alt={props.box.title}
          width={"246px"}
          height={"246px"}
          borderRadius={"50%"}
          style={{
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

import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type BestDelieveredBoxProps = {
  box: { id: string; imageurl: string; title: string };
};

const BestDelieveredBox: React.FC<BestDelieveredBoxProps> = ({ box }) => {
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
        <Link to={`/product/${box.id}`} style={{ textDecoration: "none" }}>
          <Box
            component={"img"}
            src={box.imageurl}
            alt={box.title}
            width={"246px"}
            height={"246px"}
            borderRadius={"50%"}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"20px"}
          fontWeight={600}
          lineHeight={"30px"}
          letterSpacing={0}
          textAlign={"center"}
        >
          {box.title}
        </Typography>
      </Box>
    </>
  );
};

export default BestDelieveredBox;

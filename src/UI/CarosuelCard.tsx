import { ShoppingBag } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import React from "react";

type CarosuelCardProp = {
  Card: { imageurl: string };
};

const CarosuelCard = (props: CarosuelCardProp) => {
  return (
    <Box
      id={"outer-container-to-make-design"}
      width={"280px"}
      height={"510px"}
      position={"relative"}
      margin={"auto 20px"}
      padding={"auto 20px"}
    >
      <Box
        id={"main-container"}
        width={"280px"}
        height={"510px"}
        border={"2px solid rgba(236,238,246,1)"}
        borderRadius={"20px"}
        sx={{
          overflowX: "hidden",
          overflowY: "hidden",
          background: "rgb(255, 255, 255)",
        }}
      >
        <Box
          marginTop={"22px"}
          marginLeft={"22px"}
          width={"70px"}
          height={"31px"}
          borderRadius={"3px"}
          boxShadow={"0px 4px 8px 0px #191F2C40"}
          sx={{
            backgroundColor: "#191F2C",
          }}
        >
          <Typography
            color={"#fff"}
            fontFamily="Inter"
            fontWeight={600}
            fontSize={"12px"}
            lineHeight={"16.8px"}
            letterSpacing={"0%"}
            textAlign={"center"}
            padding={"7px 0"}
          >
            Popular
          </Typography>
        </Box>
        <Box
          component={"img"}
          src={props.Card.imageurl}
          width={"200px"}
          height={"208px"}
          margin={"20px 40px 0"}
          borderRadius={"10px"}
          boxShadow={"10px 5px 10px 0px #8F5C201A"}
          sx={{
            objectFit: "cover",
            objectPosition: "center center",
            overflowY: "hidden",
          }}
        />

        <Box height={"150px"} margin={"25px 20px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              fontFamily={"Inter"}
              fontWeight={600}
              fontSize={"18px"}
              lineHeight={"25.2px"}
              letterSpacing={"0%"}
            >
              Silician
            </Typography>
            <Typography
              fontFamily={"Inter"}
              fontWeight={400}
              fontSize={"12px"}
              lineHeight={"16.8px"}
              letterSpacing={"0%"}
            >
              32 min
            </Typography>
          </Stack>
          <Typography
            marginTop={"10px"}
            fontFamily={"Inter"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight={"16.8px"}
            letterSpacing={"0%"}
          >
            Dough, Mozzarella, Cheddar, Blue, Parmesan
          </Typography>
          <Typography
            marginTop={"30px"}
            padding={"20px"}
            fontFamily={"Inter"}
            fontWeight={300}
            fontSize={"24px"}
            lineHeight={"33.6px"}
            letterSpacing={"0%"}
            textAlign={"center"}
          >
            7000NGN
          </Typography>
        </Box>
        <Box
          id={"triangle"}
          height={"50px"}
          width={"50px"}
          position={"absolute"}
          top={"95.5%"}
          left={"40%"}
          borderRight={"2px solid rgba(236, 238, 246, 1)"}
          borderBottom={"2px solid rgba(236, 238, 246, 1)"}
          borderRadius={"0 0 20px 0"}
          sx={{
            backgroundColor: " rgb(255, 255, 255)",
            transform: "rotate(45deg)",
          }}
        />
        <Box
          id={"circle"}
          width={"30px"}
          height={"30px"}
          borderRadius={"50%"}
          border={"2px solid rgba(236, 238, 246, 1)"}
          position={"absolute"}
          top={"97%"}
          left={"43.5%"}
          zIndex={3}
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#F6B716",
              // "& .MuiSvgIcon-root": {
              //   color: "#ffffff",
              // },
            },
          }}
        >
          <ShoppingBag
            sx={{
              fontSize: "20px",
              position: "absolute",
              top: "5px",
              left: "5px",

              "&:hover": {
                color: "#fff",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CarosuelCard;

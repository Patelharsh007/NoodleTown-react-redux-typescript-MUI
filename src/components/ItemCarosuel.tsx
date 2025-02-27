import React, { useState } from "react";
import ReceipeHeader from "./ReceipeHeader";
import { Box, Button } from "@mui/material";

import ScrollerCard from "../UI/ScrollerCard";

type Category = "Pizza" | "Burger" | "Chinese" | "Drinks" | "Dessert";

type Carddetails = {
  imageurl: string;
}[];

const pizza_carddetails: Carddetails = [
  { imageurl: "images/Pizza/Pizza1.jpeg" },
  { imageurl: "images/Pizza/Pizza2.jpeg" },
  { imageurl: "images/Pizza/Pizza3.jpeg" },
  { imageurl: "images/Pizza/Pizza4.jpeg" },
  { imageurl: "images/Pizza/Pizza5.jpeg" },
  { imageurl: "images/Pizza/Pizza6.jpeg" },
  { imageurl: "images/Pizza/Pizza1.jpeg" },
  { imageurl: "images/Pizza/Pizza2.jpeg" },
  { imageurl: "images/Pizza/Pizza3.jpeg" },
  { imageurl: "images/Pizza/Pizza4.jpeg" },
  { imageurl: "images/Pizza/Pizza5.jpeg" },
  { imageurl: "images/Pizza/Pizza6.jpeg" },
];

const dessert_carddetails: Carddetails = [
  { imageurl: "images/Dessert/Dessert1.jpeg" },
  { imageurl: "images/Dessert/Dessert2.jpeg" },
  { imageurl: "images/Dessert/Dessert3.jpeg" },
  { imageurl: "images/Dessert/Dessert4.jpeg" },
  { imageurl: "images/Dessert/Dessert5.jpeg" },
  { imageurl: "images/Dessert/Dessert6.jpeg" },
  { imageurl: "images/Dessert/Dessert1.jpeg" },
  { imageurl: "images/Dessert/Dessert2.jpeg" },
  { imageurl: "images/Dessert/Dessert3.jpeg" },
  { imageurl: "images/Dessert/Dessert4.jpeg" },
  { imageurl: "images/Dessert/Dessert5.jpeg" },
  { imageurl: "images/Dessert/Dessert6.jpeg" },
];

const burger_carddetails: Carddetails = [
  { imageurl: "images/Burger/Burger1.jpeg" },
  { imageurl: "images/Burger/Burger2.jpeg" },
  { imageurl: "images/Burger/Burger3.jpeg" },
  { imageurl: "images/Burger/Burger4.jpeg" },
  { imageurl: "images/Burger/Burger5.jpeg" },
  { imageurl: "images/Burger/Burger6.jpeg" },
  { imageurl: "images/Burger/Burger1.jpeg" },
  { imageurl: "images/Burger/Burger2.jpeg" },
  { imageurl: "images/Burger/Burger3.jpeg" },
  { imageurl: "images/Burger/Burger4.jpeg" },
  { imageurl: "images/Burger/Burger5.jpeg" },
  { imageurl: "images/Burger/Burger6.jpeg" },
];

const ItemCarosuel = () => {
  const [itemCategory, setItemCategory] = useState<Category>("Pizza");

  const handleCategoryChange = (category: Category) => {
    setItemCategory(category);
  };
  return (
    <>
      <h1>Carousel-Started</h1>
      <ReceipeHeader />

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {["Pizza", "Burger", "Chinese", "Drinks", "Dessert"].map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category as Category)}
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "2px solid #ccc",
              borderRadius: "50px",
              bgcolor: itemCategory === category ? "#F6B716" : "white",
              color: itemCategory === category ? "white" : "inherit",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.8,
                bgcolor: "#f8c33d",
                border: "none",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      <Box
        maxWidth={"1800px"}
        margin={"auto"}
        marginBottom={"100px"}
        padding={"20px"}
        display={"flex"}
        flexDirection={"row"}
        gap={"48px"}
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "thin",
          overscrollBehaviorX: "contain",
          scrollbarColor: "#f8f8f8 transparent",
          "&::-webkit-scrollbar-button": {
            display: "none", // Remove the arrows completely
          },
        }}
      >
        {/* Map Function to render each item of scroller */}
        {itemCategory === "Pizza" &&
          pizza_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Dessert" &&
          dessert_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Burger" &&
          burger_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
      </Box>

      {/* <Box
        id={"outer-container-to-make-design"}
        width={"280px"}
        height={"510px"}
        position={"relative"}
        margin={"auto"}
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
            src={"images/Pizza/Pizza1.jpeg"}
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
      </Box> */}
      <h1>Carousel-Ended</h1>
    </>
  );
};

export default ItemCarosuel;

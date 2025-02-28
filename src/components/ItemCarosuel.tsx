import React, { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

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

const chinese_carddetails: Carddetails = [
  { imageurl: "images/Chinese/Chinese1.jpeg" },
  { imageurl: "images/Chinese/Chinese2.jpeg" },
  { imageurl: "images/Chinese/Chinese3.jpeg" },
  { imageurl: "images/Chinese/Chinese4.jpeg" },
  { imageurl: "images/Chinese/Chinese5.jpeg" },
  { imageurl: "images/Chinese/Chinese6.jpeg" },
  { imageurl: "images/Chinese/Chinese1.jpeg" },
  { imageurl: "images/Chinese/Chinese2.jpeg" },
  { imageurl: "images/Chinese/Chinese3.jpeg" },
  { imageurl: "images/Chinese/Chinese4.jpeg" },
  { imageurl: "images/Chinese/Chinese5.jpeg" },
  { imageurl: "images/Chinese/Chinese6.jpeg" },
];

const drinks_carddetails: Carddetails = [
  { imageurl: "images/Drinks/Drinks1.jpeg" },
  { imageurl: "images/Drinks/Drinks2.jpeg" },
  { imageurl: "images/Drinks/Drinks3.jpeg" },
  { imageurl: "images/Drinks/Drinks4.jpeg" },
  { imageurl: "images/Drinks/Drinks5.jpeg" },
  { imageurl: "images/Drinks/Drinks6.jpeg" },
  { imageurl: "images/Drinks/Drinks1.jpeg" },
  { imageurl: "images/Drinks/Drinks2.jpeg" },
  { imageurl: "images/Drinks/Drinks3.jpeg" },
  { imageurl: "images/Drinks/Drinks4.jpeg" },
  { imageurl: "images/Drinks/Drinks5.jpeg" },
  { imageurl: "images/Drinks/Drinks6.jpeg" },
];

const ItemCarosuel = () => {
  const [itemCategory, setItemCategory] = useState<Category>("Pizza");

  const handleCategoryChange = (category: Category) => {
    setItemCategory(category);
  };
  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={"/images/Pizza/vector1.png"}
          width={{ xs: "100px", sm: "150px" }}
          display={{ xs: "none", sm: "block" }}
        />
        <Typography
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={{ xs: "40px", sm: "48px" }}
          lineHeight={{ xs: "50px", sm: "58.09px" }}
          letterSpacing={"0%"}
          textAlign={"center"}
        >
          Popular Recipes
        </Typography>
        <Box
          component={"img"}
          src={"/images/Pizza/vector2.png"}
          width={{ xs: "100px", sm: "150px" }}
          height={{ xs: "120px", sm: "160px", lg: "180px" }}
          display={{ xs: "none", sm: "block" }}
        />
      </Box>

      <Box
        maxWidth={"1400px"}
        margin={"auto"}
        padding={"20px"}
        marginBottom={"20px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"15px"}
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
        gap={"30px"}
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
        {itemCategory === "Burger" &&
          burger_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Chinese" &&
          chinese_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Chinese" &&
          chinese_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Drinks" &&
          drinks_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
        {itemCategory === "Dessert" &&
          dessert_carddetails.map((item, index) => (
            <ScrollerCard key={index} Card={item} />
          ))}
      </Box>
    </>
  );
};

export default ItemCarosuel;

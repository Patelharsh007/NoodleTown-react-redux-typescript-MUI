import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

type MealData = {
  category: string;
  name: string;
  image: string;
  desc: string;
  price: number;
  quantity: number;
};

const meals_data: MealData[] = [
  {
    category: "Pizzas",
    name: "Pizza 1",
    image: "/images/Pizza/Pizza1.jpeg",
    desc: "A Classic Cheesy Margharita. Can't Go Wrong.",
    price: 140,
    quantity: 0,
  },
  {
    category: "Pizzas",
    name: "Pizza 2",
    image: "/images/Pizza/Pizza2.jpeg",
    desc: "A New Non-Cheesy Margharita. Can Go Wrong.",
    price: 150,
    quantity: 0,
  },
  {
    category: "Pizzas",
    name: "Pizza 3",
    image: "/images/Pizza/Pizza3.jpeg",
    desc: "A Classic Cheesy Margharita. Can't Go Wrong.",
    price: 110,
    quantity: 0,
  },
  {
    category: "Pizzas",
    name: "Pizza 4",
    image: "/images/Pizza/Pizza4.jpeg",
    desc: "A Classic Cheesy Margharita. Can't Go Wrong.",
    price: 120,
    quantity: 0,
  },
];

const CartComponent = () => {
  const [mealsData, setMealsData] = useState<MealData[]>(meals_data);

  const handleIncrement = (meal: MealData) => {
    setMealsData((prevMeals) =>
      prevMeals.map((item) =>
        item.name === meal.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (meal: MealData) => {
    setMealsData((prevMeals) =>
      prevMeals.map((item) =>
        item.name === meal.name && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"} marginTop={"30px"}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "32px" }}
          lineHeight={{ xs: "40px", sm: "48px" }}
          letterSpacing={"0%"}
          marginBottom={"30px"}
        >
          Your Cart
        </Typography>

        <Grid2 container spacing={3}>
          {mealsData.map((meal) => {
            //mealsData is state
            return (
              <>
                <Grid2 key={meal.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    padding={{ xs: "15px", sm: "30px" }}
                    borderRadius={"17px"}
                    //   margin={{ xs: "10px", sm: "30px" }}
                    sx={{ backgroundColor: "#F9F9F9" }}
                  >
                    <Box
                      component={"img"}
                      alt={meal.image}
                      src={meal.image}
                      marginBottom={"30px"}
                      height={{ xs: "150px", sm: "190px" }}
                      width={"100%"}
                      borderRadius={"16px"}
                      sx={{
                        objectFit: "cover",
                        objectPosition: "center center",
                      }}
                    />
                    <Stack spacing={{ xs: 1.5, sm: 2 }}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "24px", sm: "28px", md: "30px" }}
                          letterSpacing={"0%"}
                          color={"#000000"}
                        >
                          {meal.name}
                        </Typography>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "24px", sm: "28px", md: "30px" }}
                          letterSpacing={"0%"}
                          color={"#FFA500"}
                        >
                          {meal.price}
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        fontSize={{ xs: "12px", sm: "14px" }}
                        lineHeight={{ xs: "19px", sm: "21px" }}
                        letterSpacing={"0%"}
                        color={"#848484"}
                        sx={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 2, // Limit to 2 lines
                          textOverflow: "ellipsis",
                        }}
                      >
                        {meal.desc}
                      </Typography>
                      <Stack
                        direction={"column"}
                        justifyContent={"space-between"}
                        spacing={1}
                      >
                        <TextField
                          id="search-value"
                          name="search"
                          placeholder="Apply coupon code"
                          fullWidth
                          sx={{
                            backgroundColor: "#F3F3F3",
                            color: "#848484",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: { xs: "12px", sm: "14px" },
                            lineHeight: { xs: "19px", sm: "21px" },
                            letterSpacing: "0%",
                            "& .MuiOutlinedInput-root": {
                              height: { xs: "40px", sm: "auto" },
                            },
                          }}
                        />
                        <Button
                          sx={{
                            backgroundColor: "#FFA500",
                            paddingX: { xs: "15px", sm: "25px" },
                            minWidth: { xs: "100%", sm: "auto" },
                            height: { xs: "40px", sm: "auto" },
                            "&:hover": {
                              backgroundColor: "#ff8c00",
                            },
                          }}
                        >
                          <Typography
                            fontFamily={"Poppins"}
                            fontWeight={400}
                            fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                            lineHeight={{ xs: "21px", sm: "24px", md: "27px" }}
                            color={"#FFFFFF"}
                          >
                            Apply
                          </Typography>
                        </Button>
                      </Stack>

                      {/* Quantity Controls */}
                      <ButtonGroup
                        sx={{
                          width: { xs: "100%", sm: "auto" },
                          "& .MuiButton-root": {
                            flex: { xs: 1, sm: "initial" },
                          },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#F3F3F3",
                            border: "2px solid #F3F3F3",
                            minWidth: { xs: "40px", sm: "auto" },
                            "& .MuiSvgIcon-root": {
                              color: "#999999",
                            },
                          }}
                        >
                          <RemoveIcon onClick={() => handleDecrement(meal)} />
                        </Button>
                        <Button
                          variant="text"
                          sx={{
                            minWidth: { xs: "40px", sm: "auto" },
                            color: "#000000", // Black color for number
                          }}
                        >
                          {meal.quantity}
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            backgroundColor: "#FFA500",
                            border: "2px solid #FFA500",
                            minWidth: { xs: "40px", sm: "auto" },
                            "& .MuiSvgIcon-root": {
                              color: "#FFFFFF", // White color for AddIcon
                            },
                            "&:hover": {
                              backgroundColor: "#ff8c00",
                              border: "2px solid #ff8c00",
                            },
                          }}
                        >
                          <AddIcon onClick={() => handleIncrement(meal)} />
                        </Button>
                      </ButtonGroup>

                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "12px", sm: "14px" }}
                          lineHeight={{ xs: "19px", sm: "21px" }}
                          letterSpacing={"0%"}
                          color={"#848484"}
                        >
                          SubTotal
                        </Typography>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "24px", sm: "28px", md: "30px" }}
                          letterSpacing={"0%"}
                          color={"#FFA500"}
                        >
                          ₹140
                        </Typography>
                      </Stack>
                      <Divider variant="middle" />
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "12px", sm: "14px" }}
                          lineHeight={{ xs: "19px", sm: "21px" }}
                          letterSpacing={"0%"}
                          color={"#848484"}
                        >
                          Total
                        </Typography>
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "24px", sm: "28px", md: "30px" }}
                          letterSpacing={"0%"}
                          color={"#FFA500"}
                        >
                          ₹140
                        </Typography>
                      </Stack>

                      {/* Order Now Button */}
                      <Button
                        sx={{
                          backgroundColor: "#FFA500",
                          padding: { xs: "10px", sm: "15px" },
                          "&:hover": {
                            backgroundColor: "#ff8c00",
                          },
                        }}
                      >
                        <Typography
                          fontFamily={"Poppins"}
                          fontWeight={400}
                          fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                          lineHeight={{ xs: "21px", sm: "24px", md: "27px" }}
                          color={"#FFFFFF"}
                        >
                          Order Now
                        </Typography>
                      </Button>
                    </Stack>
                  </Box>
                </Grid2>
              </>
            );
          })}
        </Grid2>
      </Box>
    </>
  );
};

export default CartComponent;

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { text } from "stream/consumers";

const DUMMY_MEAL_CATEGORIES: string[] = [
  "Recommended",
  "Pizzas",
  "Burger",
  "Chinese",
  "Drinks",
  "Desserts",
];

type mealsData = {
  category: string;
  name: string;
  image: string;
  desc: string;
  price: number;
  quantity: number;
};

const meals_data: mealsData[] = [
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

const RestaurantOrderOnline = () => {
  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography
          fontFamily="Poppins"
          fontWeight={500}
          fontSize={"20px"}
          lineHeight={"30px"}
        >
          Order Online
        </Typography>
        <Grid2 container width={"100%"} marginY={"40px"}>
          <Grid2
            size={{ xs: 12, sm: 3 }}
            position={"relative"}
            sx={{
              "&::after": {
                display: { xs: "none", sm: "block" },
                position: "absolute",
                top: 0,
                left: "103%",
                content: '""',
                height: "100%",
                border: "2px solid #FFC300",
                zIndex: 3,
              },
            }}
          >
            <Stack marginTop={{ xs: "0px", sm: "50px" }}>
              {DUMMY_MEAL_CATEGORIES.map((category) => {
                return (
                  <Button
                    key={category}
                    sx={{
                      //   border: "2px solid #FFA500",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#FFC300",
                        borderColor: "#FFC300",
                        "& .MuiTypography-root": {
                          color: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <Typography
                      fontFamily="Poppins"
                      fontWeight={400}
                      fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                      lineHeight={{ xs: "30px", sm: "28px", md: "30px" }}
                      color="inherit"
                    >
                      {category}
                    </Typography>
                  </Button>
                );
              })}
            </Stack>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 9 }}
            // padding={{ xs: "10px", sm: "0" }}
            paddingLeft={{ xs: "0px", sm: "30px" }}
            marginTop={{ xs: "30px", sm: "0px" }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight={500}
              fontSize={{ xs: "26px", sm: "28px", md: "32px" }}
              lineHeight={{ xs: "38px", sm: "44px", md: "48px" }}
            >
              Recommended
            </Typography>

            <Grid2
              container
              size={12}
              spacing={{ xs: 1, sm: 2 }}
              marginTop={{ xs: "20px", sm: "50px" }}
              direction={{ xs: "column", sm: "row" }}
            >
              {meals_data.map((meal) => {
                return (
                  <>
                    <Grid2
                      size={{ xs: 12, sm: 6 }}
                      //   sx={{
                      //     "@media (max-width: 380px)": {
                      //       flexBasis: "100%",
                      //       maxWidth: "100%",
                      //     },
                      //   }}
                    >
                      <Box
                        component={"img"}
                        src={meal.image}
                        alt={meal.desc}
                        width={{ xs: "100%", sm: "95%" }}
                        margin={"auto"}
                        // height={"100%"}
                        height={{ xs: "190px", sm: "100%" }} // Added fixed height for xs
                        borderRadius={"16px"}
                        sx={{
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </Grid2>

                    <Grid2
                      size={{ xs: 12, sm: 6 }}
                      sx={{
                        marginBottom: "50px",
                        // "@media (max-width: 380px)": {
                        //   flexBasis: "100%",
                        //   maxWidth: "100%",
                        //   marginTop: "16px",
                        // },
                      }}
                    >
                      <Stack spacing={"2px"}>
                        <Typography
                          fontFamily="Poppins"
                          fontWeight={400}
                          fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "30px", sm: "28px", md: "30px" }}
                        >
                          {meal.name}
                        </Typography>
                        <Typography
                          fontFamily="Poppins"
                          fontWeight={400}
                          fontSize={{ xs: "14px", sm: "12px", md: "14px" }}
                          lineHeight={{ xs: "21px", sm: "18px", md: "21px" }}
                          color="#848484"
                        >
                          {meal.desc}
                        </Typography>
                        <Typography
                          fontFamily="Poppins"
                          fontWeight={400}
                          fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                          lineHeight={{ xs: "30px", sm: "28px", md: "30px" }}
                        >
                          ₹{meal.price}
                        </Typography>
                        <Button
                          sx={{
                            // width: "100%",
                            width: "175px",
                            backgroundColor: "#FFA500",
                            color: "#000000",
                            "&:hover": {
                              backgroundColor: "#FFC300",
                              borderColor: "#FFC300",
                              "& .MuiTypography-root": {
                                color: "#FFFFFF",
                              },
                            },
                          }}
                        >
                          <Typography
                            fontFamily="Poppins"
                            fontWeight={400}
                            fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                            lineHeight={{ xs: "30px", sm: "28px", md: "30px" }}
                          >
                            Add to Cart
                          </Typography>
                        </Button>
                      </Stack>
                    </Grid2>
                  </>
                );
              })}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default RestaurantOrderOnline;

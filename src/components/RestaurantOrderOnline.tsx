import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";

import restaurants from "../data/restaurantsData";

import mealItems from "../data/mealItem";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/slices/CartSlice";
import { RootState } from "../redux/Store";

import { Link } from "react-router-dom";
import { MealItem, RestaurantItem } from "../types/type";

interface restaurantProps {
  id: string;
}

const RestaurantOrderOnline: React.FC<restaurantProps> = ({ id }) => {
  const [restaurant, setRestaurant] = useState<RestaurantItem | null>(null);
  const [mealItem, setMealItem] = useState<MealItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Recommended"
  );

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const fetchedRestaurant =
        restaurants.find((restaurant) => restaurant.id === id) || null;
      setRestaurant(fetchedRestaurant);
    };

    fetchRestaurantData();
  }, [id]);

  useEffect(() => {
    const fetchMealData = async () => {
      if (restaurant?.id) {
        const fetchedMealItems = mealItems.filter(
          (meal) => meal.restaurantId === restaurant.id
        );
        setMealItem(fetchedMealItems);
      }
    };

    fetchMealData();
  }, [restaurant]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  //redux cart
  const dispatch = useDispatch();

  // .selector to get cart items
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isItemInCart = (mealId: string) => {
    return cartItems.some((item) => item.id === mealId);
  };

  const getItemQuantity = (mealId: string) => {
    const cartItem = cartItems.find((item) => item.id === mealId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (meal: MealItem) => {
    if (!restaurant) return;

    if (!isItemInCart(meal.id)) {
      dispatch(
        addToCart({
          id: meal.id,
          itemId: meal.id,
          price: meal.price,
          quantity: 1,
          image: meal.image,
          name: meal.title,
          restaurantId: restaurant.id,
          category: meal.category,
          description: meal.shortDescription,
        })
      );
    }
  };

  const handleIncrementMeal = (mealId: string) => {
    dispatch(incrementQuantity(mealId));
  };

  const handleDecrementMeal = (mealId: string) => {
    dispatch(decrementQuantity(mealId));
  };

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography
          fontFamily="Poppins"
          fontWeight={500}
          fontSize={{ xs: "26px", sm: "20px" }}
          lineHeight={{ xs: "34px", sm: "30px" }}
          textAlign={{ xs: "center", sm: "left" }}
          paddingTop={"20px"}
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
            <Stack marginTop={{ xs: "0px", sm: "50px" }} spacing={1}>
              {/* {restaurant?.categories.unshift("Recommended")} */}

              {restaurant && restaurant.categories ? (
                ["Recommended", ...restaurant.categories].map(
                  (category, index) => {
                    const categoryCount =
                      category === "Recommended"
                        ? mealItem.filter((item) => item.isPopular).length
                        : mealItem.filter((item) => item.category === category)
                            .length;
                    if (categoryCount > 0) {
                      const isSelected = selectedCategory === category;
                      return (
                        <Button
                          key={index}
                          onClick={() => handleCategoryClick(category)}
                          sx={{
                            color: isSelected ? "#FFFFFF" : "#000000",
                            backgroundColor: isSelected
                              ? "#FFC300"
                              : "transparent",
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
                            {category} ({categoryCount})
                          </Typography>
                        </Button>
                      );
                    }
                  }
                )
              ) : (
                <p>Loading...</p>
              )}
            </Stack>
          </Grid2>

          <Grid2
            size={{ xs: 12, sm: 9 }}
            paddingLeft={{ xs: "0px", sm: "30px" }}
            marginTop={{ xs: "30px", sm: "0px" }}
            sx={{
              height: { xs: "auto", sm: "80vh" },
              overflowY: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight={500}
              fontSize={{ xs: "26px", sm: "28px", md: "32px" }}
              lineHeight={{ xs: "38px", sm: "44px", md: "48px" }}
            >
              {selectedCategory}
            </Typography>

            <Grid2
              container
              size={12}
              spacing={{ xs: 1, sm: 2 }}
              marginTop={{ xs: "20px", sm: "30px" }}
              direction={{ xs: "column", sm: "row" }}
              paddingRight={"16px"}
              sx={{
                overflowY: { sm: "auto" },
                maxHeight: { sm: "75vh" },
                whiteSpace: { sm: "normal" },
                msOverflowStyle: { sm: "none" },
                scrollbarWidth: { sm: "thin" },
                overscrollBehaviorY: { sm: "auto" },
                scrollbarColor: { sm: "#f8f8f8 transparent" },
                overflowX: "hidden",
                "& .MuiTypography-root": {
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                },
                "&::-webkit-scrollbar": {
                  display: { sm: "none" },
                },
                "&::-webkit-scrollbar-button": {
                  display: { sm: "none" },
                },
                scrollBehavior: "smooth",
              }}
            >
              {mealItem
                .filter((meal) =>
                  selectedCategory === "Recommended"
                    ? meal.isPopular === true
                    : meal.category === selectedCategory
                )
                .map((meal) => {
                  return (
                    <React.Fragment key={meal.id}>
                      <Grid2 size={{ xs: 12, sm: 6 }} paddingY={"10px"}>
                        <Link
                          to={`/product/${meal.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            component={"img"}
                            src={meal.image}
                            alt={meal.title}
                            width={{ xs: "100%", sm: "95%" }}
                            margin={"auto"}
                            // height={"100%"}
                            height={{ xs: "190px", sm: "270px" }}
                            borderRadius={"16px"}
                            sx={{
                              objectFit: "cover",
                              objectPosition: "center center",
                            }}
                          />
                        </Link>
                      </Grid2>

                      <Grid2
                        size={{ xs: 12, sm: 6 }}
                        sx={{
                          marginBottom: "50px",
                        }}
                      >
                        <Stack
                          spacing={{ xs: "2px", sm: "9px" }}
                          paddingTop={{ sm: "5px" }}
                        >
                          <Typography
                            fontFamily="Poppins"
                            fontWeight={400}
                            fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                            lineHeight={{
                              xs: "30px",
                              sm: "28px",
                              md: "30px",
                            }}
                          >
                            {meal.title}
                          </Typography>
                          <Typography
                            fontFamily="Poppins"
                            fontWeight={400}
                            fontSize={{ xs: "14px", sm: "12px", md: "14px" }}
                            lineHeight={{
                              xs: "21px",
                              sm: "18px",
                              md: "21px",
                            }}
                            color="#848484"
                          >
                            {meal.shortDescription}
                          </Typography>
                          <Typography
                            fontFamily="Poppins"
                            fontWeight={400}
                            fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                            lineHeight={{
                              xs: "30px",
                              sm: "28px",
                              md: "30px",
                            }}
                          >
                            ₹{meal.price}
                          </Typography>
                          {isItemInCart(meal.id) ? (
                            <ButtonGroup
                              disableElevation
                              sx={{
                                height: "45px",
                                width: "175px",
                                "& .MuiButtonGroup-grouped:not(:last-of-type)":
                                  {
                                    borderColor: "transparent",
                                  },
                              }}
                            >
                              <Button
                                onClick={() => handleDecrementMeal(meal.id)}
                                sx={{
                                  flex: 1,
                                  backgroundColor: "#999999",
                                  color: "#ffffff",
                                  "&:hover": {
                                    backgroundColor: "#888888",
                                    color: "#f3f3f3",
                                  },
                                }}
                              >
                                <RemoveIcon />
                              </Button>
                              <Button
                                sx={{
                                  flex: 2,
                                  backgroundColor: "#f9f9f9",
                                  color: "#000000",
                                  borderLeft: "1px solid rgba(0,0,0,0.1)",
                                  borderRight: "1px solid rgba(0,0,0,0.1)",
                                  "&:hover": {
                                    backgroundColor: "#d9d9d9",
                                  },
                                  cursor: "default",
                                }}
                                disableRipple
                              >
                                <Typography
                                  fontFamily="Poppins"
                                  fontWeight={400}
                                  fontSize={{
                                    xs: "18px",
                                    sm: "16px",
                                    md: "18px",
                                  }}
                                >
                                  {getItemQuantity(meal.id)}
                                </Typography>
                              </Button>
                              <Button
                                onClick={() => handleIncrementMeal(meal.id)}
                                sx={{
                                  flex: 1,
                                  backgroundColor: "#FFA500",
                                  color: "#FFFFFF",
                                  "&:hover": {
                                    backgroundColor: "#FFC300",
                                  },
                                }}
                              >
                                <AddIcon />
                              </Button>
                            </ButtonGroup>
                          ) : (
                            <Button
                              onClick={() => handleAddToCart(meal)}
                              sx={{
                                width: "175px",
                                backgroundColor: "#FFA500",
                                color: "#fff",
                                "&:hover": {
                                  backgroundColor: "#FFC300",
                                },
                              }}
                            >
                              <Typography
                                fontFamily="Poppins"
                                fontWeight={400}
                                fontSize={{
                                  xs: "20px",
                                  sm: "18px",
                                  md: "20px",
                                }}
                                lineHeight={{
                                  xs: "30px",
                                  sm: "28px",
                                  md: "30px",
                                }}
                              >
                                Add to Cart
                              </Typography>
                            </Button>
                          )}
                        </Stack>
                      </Grid2>
                    </React.Fragment>
                  );
                })}
              {mealItem.filter((meal) =>
                selectedCategory === "Recommended"
                  ? true
                  : meal.category === selectedCategory
              ).length === 0 && (
                <Typography
                  fontFamily="Poppins"
                  textAlign="center"
                  width="100%"
                  color="#666"
                >
                  No items available in this category
                </Typography>
              )}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default RestaurantOrderOnline;

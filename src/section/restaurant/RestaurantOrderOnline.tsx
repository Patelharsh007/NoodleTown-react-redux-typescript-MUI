import { Container, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/CartSlice";
import { RootState } from "../../redux/Store";

import { MealItem, RestaurantItem } from "../../types/type";
import restaurants from "../../data/restaurantsData";
import mealItems from "../../data/mealItem";

import RestaurantOrderCategories from "../../components/RestaurantOrderCategories";
import RestaurantOrderMenuItems from "../../components/RestaurantOrderMenuItems";

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
          name: meal.title,
          price: meal.price,
          quantity: 1,
          image: meal.image,
          restaurantId: meal.restaurantId,
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
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "24px" }}
          lineHeight={{ xs: "40px", sm: "36px" }}
          letterSpacing="0%"
          color={"#000000"}
          textAlign={{ xs: "center", sm: "left" }}
        >
          Order Online
        </Typography>
        <Grid2 container width={"100%"} marginY={"40px"}>
          <RestaurantOrderCategories
            restaurant={restaurant}
            mealItems={mealItem}
            Category={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
          <RestaurantOrderMenuItems
            mealItem={mealItem}
            Category={selectedCategory}
            onAddToCart={handleAddToCart}
            onIsItemInCart={isItemInCart}
            onIncrementItem={handleIncrementMeal}
            onDecrementItem={handleDecrementMeal}
            onGetItemQuantity={getItemQuantity}
          />
        </Grid2>
      </Container>
    </>
  );
};

export default RestaurantOrderOnline;

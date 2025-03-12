import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import restaurants from "../data/restaurantsData";
import mealItems from "../data/mealItem";
import { MealItem, RestaurantItem } from "../types/type";

export const SearchPage = () => {
  const { selectedCity, searchValue } = useParams();

  let matchedRestaurant: RestaurantItem[] = [];
  let matchedMealItems: MealItem[] = [];

  if (searchValue && selectedCity) {
    //
    matchedRestaurant = restaurants.filter(
      (restaurant) =>
        restaurant.address.toLowerCase().includes(selectedCity.toLowerCase()) &&
        (restaurant.categories
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
          restaurant.title.toLowerCase().includes(searchValue.toLowerCase()))
    );

    matchedMealItems = mealItems.filter(
      (meal) =>
        restaurants
          .find((restaurant) => restaurant.id === meal.restaurantId)
          ?.address.toLowerCase()
          .includes(selectedCity.toLowerCase()) &&
        (meal.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          meal.title.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }

  return (
    <>
      <Navbar linkColor="#000000" />
      <Container>
        <h1>
          We are searching for "{searchValue}" in {selectedCity} city.
        </h1>
        {/* Display matched restaurants if any are found */}
        {matchedRestaurant.length > 0 ? (
          matchedRestaurant.map((restaurant, index) => (
            <Box
              sx={{ backgroundColor: "#f3f3f3" }}
              padding={"20px"}
              margin={"20px"}
            >
              <Box
                component={"img"}
                src={`${restaurant.logo}`}
                height={"100px"}
                width={"100px"}
              />
              <Typography>{restaurant.title}</Typography>
              <Typography>{restaurant.address}</Typography>
              <Typography>{restaurant.cuisines.join(", ")}</Typography>
              <Typography>{restaurant.categories.join(", ")}</Typography>
            </Box>
          ))
        ) : (
          <p>No restaurants found for your search.</p>
        )}

        <Typography>Meals</Typography>

        {matchedMealItems.length > 0 ? (
          matchedMealItems.map((meal, index) => (
            <Box
              sx={{ backgroundColor: "#f3f3f3" }}
              padding={"20px"}
              margin={"20px"}
            >
              <Box
                component={"img"}
                src={`${meal.image}`}
                height={"100px"}
                width={"100px"}
              />
              <Typography>{meal.title}</Typography>
              <Typography>{meal.shortDescription}</Typography>
              <Typography>{meal.category}</Typography>
              <Typography>{meal.price}</Typography>
            </Box>
          ))
        ) : (
          <p>No restaurants found for your search.</p>
        )}
      </Container>
    </>
  );
};

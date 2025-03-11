import { Grid2, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { MealItem, RestaurantItem } from "../types/type";

interface RestaurantOrderCategoriesProps {
  restaurant: RestaurantItem | null;
  mealItems: MealItem[];
  Category: string | null;
  onCategoryClick: (category: string) => void;
}

const RestaurantOrderCategories: React.FC<RestaurantOrderCategoriesProps> = ({
  restaurant,
  mealItems,
  Category,
  onCategoryClick,
}) => {
  return (
    <>
      <Grid2
        size={{ xs: 12, sm: 3 }}
        position={"relative"}
        // for line beside the side menu categories
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
            ["Recommended", ...restaurant.categories].map((category, index) => {
              const categoryCount =
                category === "Recommended"
                  ? mealItems.filter((item) => item.isPopular).length
                  : mealItems.filter((item) => item.category === category)
                      .length;
              if (categoryCount > 0) {
                const isSelected = Category === category;
                return (
                  <Button
                    key={index}
                    onClick={() => onCategoryClick(category)}
                    sx={{
                      color: isSelected ? "#FFFFFF" : "#000000",
                      backgroundColor: isSelected ? "#FFC300" : "transparent",
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
            })
          ) : (
            <p>Loading...</p>
          )}
        </Stack>
      </Grid2>
    </>
  );
};

export default RestaurantOrderCategories;

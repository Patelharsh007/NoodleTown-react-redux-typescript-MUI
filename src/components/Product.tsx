import React from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { showSuccessToast, showInfoToast } from "../UI/ToastContainer";

import mealItems from "../data/mealItem";
import { MealItemType } from "../data/mealItemTypes";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/CartSlice";

type productDetailProp = {
  id: string;
};

const Product: React.FC<productDetailProp> = ({ id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const meal = mealItems.find((item) => item.id === id);

  if (!meal) {
    return <Navigate to="/" replace />;
  }

  const isItemInCart = (id: string) => cartItems.some((item) => item.id === id);
  const getItemQuantity = (id: string) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

  const handleAddToCart = (meal: MealItemType) => {
    dispatch(
      addToCart({
        id: meal.id,
        itemId: meal.id,
        price: meal.price,
        quantity: 1,
        image: meal.image,
        name: meal.title,
        category: meal.category,
        description: meal.shortDescription,
        restaurantId: meal.restaurantId || "default", // Add this line
      })
    );
    showSuccessToast(`${meal.title} added to cart`);
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(meal.id));
    showInfoToast(`${meal.title} quantity increased`);
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(meal.id));
    showInfoToast(`${meal.title} quantity decreased`);
  };

  return (
    <Box
      maxWidth="1600px"
      width="90%"
      margin="auto"
      marginY={{ xs: "30px", md: "50px" }}
    >
      <Grid2 container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
        {/* Image Section */}
        <Grid2 size={{ sm: 12, md: 5 }}>
          <Box
            component="img"
            src={meal.image}
            alt={meal.title}
            sx={{
              width: "100%",
              height: { xs: "400px", sm: "400px", md: "500px" },
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </Grid2>

        {/* Content Section */}
        <Grid2 size={{ sm: 12, md: 7 }}>
          <Stack
            spacing={{ xs: 2.5, md: 3.5 }}
            sx={{
              backgroundColor: "#fff",
              padding: { xs: "20px", sm: "30px" },
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            {/* Title and Price */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                fontFamily="Poppins"
                fontWeight={600}
                fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
                color="#000"
                sx={{ lineHeight: 1.2 }}
              >
                {meal.title}
              </Typography>

              <Typography
                fontFamily="Poppins"
                fontWeight={500}
                fontSize={{ xs: "22px", sm: "24px", md: "28px" }}
                color="#FFA500"
                sx={{ whiteSpace: "nowrap" }}
              >
                ₹{meal.price}
              </Typography>
            </Stack>

            {/* Category and Cart Actions */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                fontFamily="Poppins"
                fontSize={{ xs: "14px", sm: "16px" }}
                color="#666"
                sx={{
                  padding: "8px 16px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                {meal.category}
              </Typography>

              {!isItemInCart(meal.id) ? (
                <Button
                  onClick={() => handleAddToCart(meal)}
                  sx={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    width: { xs: "100%", sm: "auto" },
                    backgroundColor: "#FFA500",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#FFC300",
                    },
                  }}
                >
                  <Typography fontFamily="Poppins" fontWeight={500}>
                    Add to Cart
                  </Typography>
                </Button>
              ) : (
                <ButtonGroup
                  disableElevation
                  sx={{
                    height: "45px",
                    width: { xs: "100%", sm: "auto" },
                    "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                      borderColor: "transparent",
                    },
                  }}
                >
                  <Button
                    onClick={handleDecrement}
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
                    <Typography fontFamily="Poppins" fontSize="18px">
                      {getItemQuantity(meal.id)}
                    </Typography>
                  </Button>
                  <Button
                    onClick={handleIncrement}
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
              )}
            </Stack>

            {/* Description Section */}
            <Box sx={{ mt: { xs: 2, md: 4 } }}>
              <Typography
                fontFamily="Poppins"
                fontSize={{ xs: "16px", sm: "18px" }}
                color="#333"
                fontWeight={500}
                sx={{ mb: 2 }}
              >
                {meal.shortDescription}
              </Typography>

              <Typography
                fontFamily="Poppins"
                fontSize={{ xs: "14px", sm: "16px" }}
                color="#666"
                lineHeight={1.8}
                sx={{
                  backgroundColor: "#fafafa",
                  padding: "20px",
                  borderRadius: "12px",
                }}
              >
                {meal.fullDescription}
              </Typography>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Product;

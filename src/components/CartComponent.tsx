import React from "react";
import { Box, Button, Grid2, Paper, Stack, Typography } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/Store";

import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../redux/slices/CartSlice";

import OrderSummaryForm from "../form/OrderSummaryForm";
import AddressForm from "../form/AddressForm";
import CartCard from "../UI/CartCard";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (itemId: string) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: string) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"} marginTop={"30px"}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          marginBottom="30px"
        >
          <Typography
            fontFamily={"Poppins"}
            fontWeight={500}
            fontSize={{ xs: "28px", sm: "32px" }}
            lineHeight={{ xs: "40px", sm: "48px" }}
            letterSpacing={"0%"}
            marginBottom={"30px"}
            textAlign={"left"}
          >
            Your Cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
          </Typography>
          {cartItems.length > 0 && (
            <Button
              startIcon={<DeleteOutlineIcon />}
              onClick={handleClearCart}
              sx={{
                alignSelf: { xs: "flex-end", sm: "center" },
                color: "#666",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#ffebcc",
                  color: "#FFA500",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: "20px",
                },
              }}
            >
              <Typography
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={{ xs: "14px", sm: "16px" }}
              >
                Clear Cart
              </Typography>
            </Button>
          )}
        </Stack>

        <Grid2 container spacing={3} margin={"30px 0"}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))
          ) : (
            <Typography
              textAlign="center"
              width="100%"
              marginY={4}
              color="#666"
              fontSize="1.2rem"
            >
              Your cart is empty
            </Typography>
          )}
        </Grid2>
        {cartItems.length > 0 && (
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#F9F9F9",
              padding: { xs: "20px", sm: "30px" },
              borderRadius: "17px",
              marginTop: "30px",
            }}
          >
            <Grid2 container spacing={4}>
              <AddressForm />
              <OrderSummaryForm />
            </Grid2>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default CartComponent;

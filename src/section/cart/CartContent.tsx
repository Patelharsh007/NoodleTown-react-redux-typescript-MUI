import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import CartCard from "../../components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../redux/slices/CartSlice";
import { RootState } from "../../redux/Store";

const CartContent = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (itemId: string) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: string) => {
    dispatch(decrementQuantity(itemId));
  };

  return (
    <>
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"}>
        <Grid2 container spacing={3} margin={"30px 0"}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                key={item.id}
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
      </Box>
    </>
  );
};

export default CartContent;

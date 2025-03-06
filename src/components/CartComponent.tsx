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

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/Store";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/CartSlice";

const CartComponent = () => {
  const dispatch = useDispatch();

  //get items of cart from redux satore
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (itemId: string) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId: string) => {
    dispatch(decrementQuantity(itemId));
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
          Your Cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
        </Typography>

        <Grid2 container spacing={3} margin={"30px 0"}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Grid2 key={item.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box
                  padding={{ xs: "15px", sm: "30px" }}
                  borderRadius={"17px"}
                  //   margin={{ xs: "10px", sm: "30px" }}
                  sx={{ backgroundColor: "#F9F9F9" }}
                >
                  <Box
                    component={"img"}
                    alt={item.image}
                    src={item.image}
                    marginBottom={"30px"}
                    height={{ xs: "250px", sm: "190px" }}
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
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          minHeight: { xs: "48px", sm: "56px", md: "60px" },
                          maxWidth: "70%", // Limit width to allow space for price
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                        lineHeight={{ xs: "24px", sm: "28px", md: "30px" }}
                        letterSpacing={"0%"}
                        color={"#FFA500"}
                        sx={{
                          whiteSpace: "nowrap", // Keep price on one line
                        }}
                      >
                        ₹{item.price}
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
                      {item.description}
                    </Typography>
                    {/* <Stack
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
                      </Stack> */}

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
                        onClick={() => handleDecrement(item.id)}
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
                        <RemoveIcon />
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          minWidth: { xs: "40px", sm: "auto" },
                          color: "#000000",
                        }}
                      >
                        {item.quantity}
                      </Button>
                      <Button
                        onClick={() => handleIncrement(item.id)}
                        variant="outlined"
                        sx={{
                          backgroundColor: "#FFA500",
                          border: "2px solid #FFA500",
                          minWidth: { xs: "40px", sm: "auto" },
                          "& .MuiSvgIcon-root": {
                            color: "#FFFFFF",
                          },
                          "&:hover": {
                            backgroundColor: "#ff8c00",
                            border: "2px solid #ff8c00",
                          },
                        }}
                      >
                        <AddIcon />
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
                        ₹{item.price * item.quantity}
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
                        ₹{item.price * item.quantity}
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

export default CartComponent;

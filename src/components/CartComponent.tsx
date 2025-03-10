import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/Store";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../redux/slices/CartSlice";

import { Link } from "react-router-dom";
import OrderSummary from "../form/OrderSummary";
import AddressForm from "../form/AddressForm";

//main component
const CartComponent: React.FC = () => {
  const dispatch = useDispatch();

  //get items of cart from redux satore
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
              <Grid2 key={item.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Box
                  padding={{ xs: "15px", sm: "30px" }}
                  borderRadius={"17px"}
                  //   margin={{ xs: "10px", sm: "30px" }}
                  sx={{ backgroundColor: "#F9F9F9" }}
                >
                  <Link to={`/product/${item.id}`}>
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
                  </Link>
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
                          WebkitLineClamp: 2, // This will truncate the text after 2 lines
                          WebkitBoxOrient: "vertical",
                          maxWidth: "70%",
                          minHeight: "52px", // Ensures consistent height even if the text is short
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
                          whiteSpace: "nowrap",
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
                        WebkitLineClamp: 2,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Typography>

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
        {/* {cartItems.length > 0 && <OrderSummary />} */}
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
              <OrderSummary />
            </Grid2>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default CartComponent;

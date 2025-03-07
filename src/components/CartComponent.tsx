import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControlLabel,
  Grid2,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/Store";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../redux/slices/CartSlice";

import {
  showSuccessToast,
  showInfoToast,
  showErrorToast,
} from "../UI/ToastContainer";

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

// Add these interfaces after existing Address interface
interface NewAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

//main component
const CartComponent = () => {
  const dispatch = useDispatch();

  //get items of cart from redux satore
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (itemId: string) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity >= 5) {
      showErrorToast(`Maximum quantity limit (5) reached for ${item.name}`);
      return;
    }
    dispatch(incrementQuantity(itemId));
    if (item) {
      showInfoToast(`${item.name} quantity increased`);
    }
  };

  const handleDecrement = (itemId: string) => {
    const item = cartItems.find((item) => item.id === itemId);
    dispatch(decrementQuantity(itemId));
    if (item) {
      showInfoToast(`${item.name} quantity decreased`);
    }
  };

  // Address
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      street: "ABCD",
      city: "SURAT",
      state: "GUJARAT",
      pincode: "987654",
    },
  ]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState<NewAddress>({
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Checkout--- totaldiscount etc
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);

  const handleApplyCoupon = () => {
    if (couponCode.length === 6) {
      setDiscount(50); //static copuon value
      showSuccessToast("Coupon applied: Got ₹50/- off");
      setCouponError(null);
    } else {
      setCouponError("Please entervalid 6 digit coupon code");
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharges = 40;
  const total = subtotal - discount + deliveryCharges;

  const handleAddAddress = () => {
    if (
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.pincode
    )
      return;

    const address: Address = {
      id: String(Date.now()),
      ...newAddress,
    };

    setAddresses([...addresses, address]);
    setNewAddress({
      street: "",
      city: "",
      state: "",
      pincode: "",
    });
    setShowAddressForm(false);
  };

  const handleCheckout = () => {
    if (!selectedAddress || cartItems.length === 0) return;

    setOrderPlaced(true);
    showSuccessToast(
      "🎉 Thank you for your order! Your delicious meal is on its way."
    );

    setTimeout(() => {
      dispatch(clearCart());
      setOrderPlaced(false);
      setSelectedAddress("");
      setShowAddressForm(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 5000);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    showSuccessToast("The entire cart is Emptied. ");
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
                          // minHeight: { xs: "48px", sm: "56px", md: "60px" },
                          maxWidth: "70%",
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

                    {/* Order Now Button
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
                    </Button> */}
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
        {cartItems.length > 0 && (
          <>
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
                {/* Address Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight={500}
                    fontSize={{ xs: "20px", sm: "24px" }}
                    marginBottom="20px"
                  >
                    Select Delivery Address
                  </Typography>

                  {/* Address List */}
                  <RadioGroup
                    value={selectedAddress}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                  >
                    {addresses.map((address) => (
                      <FormControlLabel
                        key={address.id}
                        value={address.id}
                        control={
                          <Radio
                            sx={{
                              color: "#FFA500",
                              "&.Mui-checked": {
                                color: "#FFA500",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            fontFamily="Poppins"
                            fontSize={{ xs: "14px", sm: "16px" }}
                            color="#666"
                          >
                            {`${address.street}, ${address.city}, ${address.state} - ${address.pincode}`}
                          </Typography>
                        }
                        sx={{ marginBottom: "10px" }}
                      />
                    ))}
                  </RadioGroup>

                  {/* Add Address Form */}
                  {showAddressForm ? (
                    <Box sx={{ mt: 2 }}>
                      <Stack spacing={2}>
                        <TextField
                          label="Street Address"
                          fullWidth
                          size="small"
                          value={newAddress.street}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              street: e.target.value,
                            })
                          }
                        />
                        <Grid2 container spacing={2}>
                          <Grid2 size={{ xs: 6 }}>
                            <TextField
                              label="City"
                              fullWidth
                              size="small"
                              value={newAddress.city}
                              onChange={(e) =>
                                setNewAddress({
                                  ...newAddress,
                                  city: e.target.value,
                                })
                              }
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 6 }}>
                            <TextField
                              label="State"
                              fullWidth
                              size="small"
                              value={newAddress.state}
                              onChange={(e) =>
                                setNewAddress({
                                  ...newAddress,
                                  state: e.target.value,
                                })
                              }
                            />
                          </Grid2>
                        </Grid2>
                        <TextField
                          label="Pincode"
                          fullWidth
                          size="small"
                          value={newAddress.pincode}
                          onChange={(e) => {
                            // Only allow numbers and limit to 6 digits
                            const value = e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 6);
                            setNewAddress({
                              ...newAddress,
                              pincode: value,
                            });
                          }}
                          error={
                            newAddress.pincode !== "" &&
                            newAddress.pincode.length !== 6
                          }
                          helperText={
                            newAddress.pincode !== "" &&
                            newAddress.pincode.length !== 6
                              ? "Pincode must be 6 digits"
                              : ""
                          }
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                        />
                        <Stack direction="row" spacing={2}>
                          <Button
                            onClick={() => setShowAddressForm(false)}
                            sx={{ color: "#666" }}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleAddAddress}
                            sx={{
                              backgroundColor: "#FFA500",
                              color: "#fff",
                              "&:hover": { backgroundColor: "#ff8c00" },
                            }}
                          >
                            Save Address
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  ) : (
                    <Button
                      onClick={() => setShowAddressForm(true)}
                      sx={{
                        backgroundColor: "#FFA500",
                        color: "#fff",
                        mt: 2,
                        "&:hover": { backgroundColor: "#ff8c00" },
                      }}
                    >
                      Add New Address
                    </Button>
                  )}
                </Grid2>

                {/* Order Summary Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    fontFamily="Poppins"
                    fontWeight={500}
                    fontSize={{ xs: "20px", sm: "24px" }}
                    marginBottom="20px"
                  >
                    Order Summary
                  </Typography>

                  <Stack
                    spacing={2}
                    sx={{ backgroundColor: "#fff", p: 3, borderRadius: "8px" }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent={"space-between"}
                      spacing={1}
                    >
                      <TextField
                        value={couponCode}
                        onChange={(e) =>
                          setCouponCode(e.target.value.toUpperCase())
                        }
                        placeholder="Apply coupon code"
                        fullWidth
                        error={Boolean(couponError)}
                        helperText={
                          couponCode !== "" && couponCode.length !== 6
                            ? "Coupon Code must be 6 letter long"
                            : ""
                        }
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
                        onClick={handleApplyCoupon}
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
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontFamily="Poppins" color="#666">
                        Subtotal
                      </Typography>
                      <Typography fontFamily="Poppins">₹{subtotal}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontFamily="Poppins" color="#666">
                        Discount
                      </Typography>
                      <Typography fontFamily="Poppins" color="green">
                        -₹{discount}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontFamily="Poppins" color="#666">
                        Delivery Charges
                      </Typography>
                      <Typography fontFamily="Poppins">
                        ₹{deliveryCharges}
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontFamily="Poppins" fontWeight={500}>
                        Total
                      </Typography>
                      <Typography
                        fontFamily="Poppins"
                        fontWeight={500}
                        color="#FFA500"
                      >
                        ₹{total}
                      </Typography>
                    </Stack>

                    <Button
                      onClick={handleCheckout}
                      disabled={!selectedAddress || cartItems.length === 0}
                      sx={{
                        backgroundColor: "#FFA500",
                        color: "#fff",
                        padding: "15px",
                        mt: 2,
                        "&:hover": { backgroundColor: "#ff8c00" },
                        "&.Mui-disabled": { backgroundColor: "#ccc" },
                      }}
                    >
                      <Typography fontFamily="Poppins">
                        Proceed to Checkout
                      </Typography>
                    </Button>
                  </Stack>
                </Grid2>
              </Grid2>
            </Paper>

            {/* Order Confirmation Message */}
            {orderPlaced && (
              <Typography
                textAlign="center"
                fontFamily="Poppins"
                fontSize="1.2rem"
                color="green"
                marginTop={4}
              >
                🎉 Thank you for your order! Your delicious meal is on its way.
              </Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default CartComponent;

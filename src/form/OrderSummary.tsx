import {
  Paper,
  Grid2,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { clearCart } from "../redux/slices/CartSlice";
import { showSuccessToast } from "../UI/ToastContainer";

const OrderSummary = () => {
  // Checkout--- totaldiscount etc
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);
  const dispatch = useDispatch();

  //Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const selectedAddress = useSelector(
    (state: RootState) => state.seletedAddress.item
  );

  //coupon logic
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

  const handleCheckout = () => {
    if (!selectedAddress || cartItems.length === 0) return;

    setOrderPlaced(true);
    showSuccessToast(
      "🎉 Thank you for your order! Your delicious meal is on its way."
    );

    setTimeout(() => {
      dispatch(clearCart());
      setOrderPlaced(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  return (
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
        {selectedAddress && (
          <Typography fontFamily="Poppins" color="#666">
            Address :{" "}
            {`${selectedAddress?.street}, ${selectedAddress?.city}, ${selectedAddress?.state} - ${selectedAddress?.pincode}`}
          </Typography>
        )}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          spacing={1}
        >
          <TextField
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
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
          <Typography fontFamily="Poppins">₹{deliveryCharges}</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography fontFamily="Poppins" fontWeight={500}>
            Total
          </Typography>
          <Typography fontFamily="Poppins" fontWeight={500} color="#FFA500">
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
          <Typography fontFamily="Poppins">Proceed to Checkout</Typography>
        </Button>
      </Stack>
    </Grid2>
  );
};

export default OrderSummary;

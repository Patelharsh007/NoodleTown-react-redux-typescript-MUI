import {
  Grid2,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { addAddress } from "../redux/slices/AddressSlice";
import { selectAddress } from "../redux/slices/SelectedAddressSlice";

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

//New address to be added to list
interface NewAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

const AddressForm = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  //New address when added
  const [newAddress, setNewAddress] = useState<NewAddress>({
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Redux
  const dispatch = useDispatch();

  const addressItems = useSelector((state: RootState) => state.address.items);

  const selectedAddress = useSelector(
    (state: RootState) => state.seletedAddress.item
  );

  const handleAddAddress = () => {
    if (
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.pincode
    ) {
      return;
    }
    const address: Address = {
      id: String(Date.now()),
      ...newAddress,
    };
    dispatch(addAddress(address));
    setNewAddress({
      street: "",
      city: "",
      state: "",
      pincode: "",
    });
    setShowAddressForm(false);
  };

  const handleSelectAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.value;
    const selected = addressItems.find((address) => address.id === selectedId);
    if (selected) {
      dispatch(selectAddress(selected));
    }
  };

  return (
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
        value={selectedAddress?.id}
        onChange={(e) => handleSelectAddress(e)}
      >
        {addressItems.map((address) => (
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
                const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
                setNewAddress({
                  ...newAddress,
                  pincode: value,
                });
              }}
              error={
                newAddress.pincode !== "" && newAddress.pincode.length !== 6
              }
              helperText={
                newAddress.pincode !== "" && newAddress.pincode.length !== 6
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
  );
};

export default AddressForm;

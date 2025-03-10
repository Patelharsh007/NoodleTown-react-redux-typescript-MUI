import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedAddressItem {
  id: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

interface SelectedAddressState {
  item: SelectedAddressItem | null;
}

const initialState: SelectedAddressState = {
  item: null,
};

const SelectedAddressSlice = createSlice({
  name: "selectedaddress",
  initialState,
  reducers: {
    selectAddress: (state, action: PayloadAction<SelectedAddressItem>) => {
      state.item = { ...action.payload };
    },
    deselectAddress: (state) => {
      state.item = null;
    },
  },
});

export const { selectAddress, deselectAddress } = SelectedAddressSlice.actions;

export default SelectedAddressSlice.reducer;

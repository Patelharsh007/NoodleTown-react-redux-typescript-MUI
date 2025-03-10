import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./slices/CartSlice";
import AddressSlice from "./slices/AddressSlice";
import SelectedAddressSlice from "./slices/SelectedAddressSlice";
import OrderSlice from "./slices/OrderSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    address: AddressSlice,
    seletedAddress: SelectedAddressSlice,
    order: OrderSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

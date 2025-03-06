import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./slices/CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
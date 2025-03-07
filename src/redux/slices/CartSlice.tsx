import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
} from "../../UI/ToastContainer";

interface CartItem {
  id: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurantId: string;
  category: string;
  description?: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push({ ...action.payload, quantity: 1 });
      showSuccessToast(`${action.payload.name} added to cart succesfully`);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity >= 5) {
        showErrorToast(`Maximum quantity limit (5) reached for ${item.name}`);
        return;
      }
      if (item) {
        item.quantity += 1;
        showInfoToast(`${item.name} quantity increased`);
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // showInfoToast(`${item.name} quantity decreased`);
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      showInfoToast(`${item?.name} quantity decreased`);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      showSuccessToast("The entire cart is Emptied. ");
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;

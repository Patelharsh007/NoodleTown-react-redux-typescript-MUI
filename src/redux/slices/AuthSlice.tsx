// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showErrorToast, showSuccessToast } from "../../UI/ToastContainer";
import { AuthItem } from "../../types/type";

interface AuthState {
  authUser: AuthItem;
}

const loadAuthFromLocalStorage = (): AuthState => {
  const storedAuth = localStorage.getItem("auth");
  if (storedAuth) {
    return { authUser: JSON.parse(storedAuth) };
  }
  return {
    authUser: { isAuthenticated: false, email: "", fullName: "", password: "" },
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthFromLocalStorage(),
  reducers: {
    signUp: (
      state,
      action: PayloadAction<{
        email: string;
        fullName?: string;
        password: string;
      }>
    ) => {
      const user = { ...action.payload, isAuthenticated: true };
      localStorage.setItem("auth", JSON.stringify(user));
      state.authUser = user;
    },

    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const storedAuth = localStorage.getItem("auth");

      if (!storedAuth) {
        showErrorToast("No user found. Please sign up first.");
        return; // Early return to prevent state update
      }

      const user = JSON.parse(storedAuth);

      // Check if the credentials match the stored data
      if (
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        state.authUser.isAuthenticated = true;
        state.authUser.email = user.email;
        state.authUser.fullName = user.fullName;
        // Password should not be stored in the state
        state.authUser.password = ""; // Clear sensitive information
      } else {
        showErrorToast("Invalid email or password.");
      }
    },
    logout: (state) => {
      state.authUser = {
        isAuthenticated: false,
        email: "",
        fullName: "",
        password: "",
      };
      localStorage.removeItem("auth");
      showSuccessToast("User Logged Out succesfully.");
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;

// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthItem {
  isAuthenticated: boolean;
  email: string;
  fullName?: string;
  password: string;
}

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
      const user = JSON.parse(localStorage.getItem("auth") || "{}");
      if (
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        state.authUser.isAuthenticated = true;
        state.authUser.email = action.payload.email;
        state.authUser.fullName = user.fullName;
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
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;

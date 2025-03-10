import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import RestaurantPage from "./pages/RestaurantPage";
import UserDetail from "./pages/UserDetail";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import Auth from "./components/Auth";
import ProtectedRoute from "./UI/ProtectedRoute";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

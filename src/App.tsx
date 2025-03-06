import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import RestaurantPage from "./pages/RestaurantPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/loginRegister" element={<LoginRegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurantPage/:id" element={<RestaurantPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />{" "}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

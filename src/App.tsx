import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constant/constant";

import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import RestaurantPage from "./pages/RestaurantPage";
import UserDetail from "./pages/UserDetail";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import AuthPage from "./pages/AuthPage";
import OrderPage from "./pages/OrderPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        {/* Redirect to /home by default */}
        <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.RESTAURANT} element={<RestaurantPage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductDetails />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route
          path={ROUTES.USER}
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ORDERS}
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

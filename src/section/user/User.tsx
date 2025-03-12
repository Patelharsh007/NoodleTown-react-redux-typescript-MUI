import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

import { Navigate, useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container } from "@mui/material";
import { logout } from "../../redux/slices/AuthSlice";

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authUser } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  const handleViewOrders = () => {
    navigate("/orders");
  };

  if (!authUser.isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: { xs: "40px" }, height: "70vh" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={4}
        height={"90%"}
      >
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        {authUser.fullName && (
          <Typography variant="h6">
            <strong>Full Name:</strong> {authUser.fullName}
          </Typography>
        )}

        <Typography variant="h6">
          <strong>Email:</strong> {authUser.email || "N/A"}
        </Typography>

        {/* Logout Button */}
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ marginRight: 2 }}
          >
            Logout
          </Button>

          {/* View Orders Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewOrders}
          >
            View Orders
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserPage;

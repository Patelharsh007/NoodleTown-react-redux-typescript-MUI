import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { login, signUp } from "../redux/slices/AuthSlice";
import { LoginForm } from "../form/LoginForm";
import { SignUpForm } from "../form/SignUpForm";
import { assets } from "../assets/assets";

export const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
    navigate("/user");
  };

  const handleSignUp = (fullName: string, email: string, password: string) => {
    dispatch(signUp({ fullName, email, password }));
    navigate("/user");
  };

  return (
    <Box
      width="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundImage: {
          xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${assets.images.auth.authBg})`,
          md: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${assets.images.auth.authBg1})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        width={{ xs: "70%", sm: "50%" }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "24px",
          padding: { xs: 3, sm: 4 },
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={assets.images.auth.authLogo}
          alt="Noodletown"
          sx={{
            width: "80px",
            height: "80px",
            display: "block",
            margin: "0 auto 20px",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 1,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          {isLogin ? "Welcome Back!" : "Create Account"}
        </Typography>

        <Typography
          sx={{
            color: "#666",
            mb: 3,
            fontSize: "0.9rem",
          }}
        >
          {isLogin
            ? "Your favorite food is waiting for you!"
            : "Join us for delicious adventures!"}
        </Typography>

        {isLogin ? (
          <LoginForm onSubmit={handleLogin} />
        ) : (
          <SignUpForm onSubmit={handleSignUp} />
        )}

        <Typography
          onClick={() => setIsLogin(!isLogin)}
          sx={{
            color: "#FFA500",
            textTransform: "none",
            fontWeight: "bold",
            mt: 2,
            mb: 2,
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#ff8c00",
              cursor: "pointer",
            },
          }}
        >
          {isLogin ? "Create Account" : "Login"}
        </Typography>

        <Link
          to="/home"
          style={{
            display: "block",
            textAlign: "center",
            color: "#666",
            fontSize: "0.9rem",
            marginTop: "1rem",
            textDecoration: "none",
          }}
        >
          Go to HomePage
        </Link>
      </Box>
    </Box>
  );
};

export default Auth;

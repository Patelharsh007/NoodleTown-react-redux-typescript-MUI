import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Person,
} from "@mui/icons-material";
import { assets } from "../assets/assets";
import { useDispatch } from "react-redux";
import { login, signUp } from "../redux/slices/AuthSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface FormData {
  fullName?: string;
  email: string;
  password: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (tab === 1 && !formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (tab === 0) {
        // Login logic
        const user = { email: formData.email, password: formData.password };
        dispatch(login(user));
        navigate("/user");
      } else if (tab === 1) {
        // Sign-up logic
        const userData = {
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
        };
        dispatch(signUp(userData));
        navigate("/user"); // Navigate to authenticated page
      }
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${assets.images.auth.authBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "450px" },
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "24px",
          backdropFilter: "blur(20px)",
          padding: { xs: 3, sm: 4 },
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Box
          component="img"
          src={`${assets.images.auth.authLogo}`}
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
          textAlign="center"
          fontFamily="Poppins"
          fontWeight={600}
          color="#333"
          mb={1}
        >
          {tab === 0 ? "Welcome Back!" : "Create Account"}
        </Typography>

        <Typography
          textAlign="center"
          fontFamily="Poppins"
          color="#666"
          mb={3}
          fontSize="0.9rem"
        >
          {tab === 0
            ? "Your favorite food is waiting for you!"
            : "Join us for delicious adventures!"}
        </Typography>

        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 500,
              minWidth: "120px",
              transition: "all 0.3s ease",
            },
            "& .Mui-selected": {
              color: "#FFA500 !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#FFA500",
              height: "3px",
              borderRadius: "3px",
            },
          }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="Email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#FFA500" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#FFA500" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                },
              }}
            />

            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FFA500",
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: "1rem",
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#ff8c00",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(255, 165, 0, 0.4)",
                },
              }}
            >
              Login
            </Button>
          </Stack>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              placeholder="Full Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#FFA500" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="Email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#FFA500" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#FFA500" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFA500",
                  },
                },
              }}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#FFA500",
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: "1rem",
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#ff8c00",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(255, 165, 0, 0.4)",
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </TabPanel>
        <Typography
          paddingTop={"50px"}
          textAlign="center"
          fontFamily="Poppins"
          color="#666"
          mb={3}
          fontSize="0.9rem"
        >
          Go to HomePage
        </Typography>
      </Box>
    </Container>
  );
};

export default Auth;

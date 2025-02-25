import React, { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import Navbar from "./Navbar";

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState("Surat");
  const [searchValue, setSearchValue] = useState("");

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          padding: 0,
          width: "100vw",
          height: { xs: "480px", sm: "548px" },
          background: 'url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
          zIndex: 1,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",

          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.46)",
            zIndex: -1,
          },
        }}
      >
        <Navbar linkColor="#fff" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "70px", sm: "130px" },
          }}
        >
          <Stack
            direction="column"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 700,
                fontSize: { xs: "38px", sm: "48px" },
                lineHeight: "72px",
                color: "#fff",
                letterSpacing: "0",
                // "@media (max-width: 400px)": {
                //   fontSize: "38px", // Set the font size
                //   lineHeight: "58px",
                // },
              }}
            >
              NOODLETOWN
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 500,
                fontSize: { xs: "18px", sm: "24px" },
                lineHeight: "36px",
                color: "#fff",
                letterSpacing: "0",
                // "@media (max-width: 400px)": {
                //   fontSize: "17.3px", // Set the font size
                //   lineHeight: "26px",
                // },
              }}
            >
              Discover best food around you
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                height: { xs: "80px", sm: "65px" },
                width: { xs: "90%", sm: "590px" },
                backgroundColor: "#d9d9d9",
                borderRadius: "8px",
              }}
            >
              {/* Search-Bar Box  */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  margin: "auto 15px",
                  gap: { xs: "5px", sm: "41px" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Select  */}
                <Select
                  id="dropdown"
                  value={selectedCity}
                  onChange={handleCityChange}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "& .MuiSelect-select": {
                      padding: { xs: "7px", sm: "auto" }, // Remove padding
                    },
                  }}
                >
                  <MenuItem value="Navsari">Navsari</MenuItem>
                  <MenuItem value="Surat">Surat</MenuItem>
                  <MenuItem value="Valsad">Valsad</MenuItem>
                </Select>

                <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  |
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SearchIcon sx={{ color: "#999999" }} />
                  <TextField
                    id="search-value"
                    onChange={handleSearchChange}
                    placeholder="Search for restraunt, cuisine, places"
                    sx={{
                      width: { xs: "230px", sm: "320px" }, // Responsive width
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#999999",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: { xs: "16.5px", sm: "18px" }, // Responsive font size
                        lineHeight: "27px",
                        letterSpacing: "0px",
                        padding: "0px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        textOverflow: "ellipsis", // Add ellipsis for overflow
                      },
                    }}
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

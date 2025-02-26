import { Box, Typography } from "@mui/material";
import React from "react";

const GridImages = () => {
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        width: { xs: "80%", sm: "90%", lg: "95%" },
        margin: { xs: "100px auto", sm: "250px auto" },
        display: "grid",
        padding: { xs: "40px", sm: "30px" },
        gridTemplateAreas: {
          xs: '"first" "second" "third"',
          sm: '"first second" "first third"',
        },
        gap: "18px",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
      }}
    >
      <Box
        sx={{
          gridArea: "first",
          position: "relative",
          borderRadius: "17px",
          overflow: "hidden",
          height: { xs: "250px", sm: "400px", lg: "550px" },
          width: "100%",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "17px",
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="images/Grid-Images/img4.jpg"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "17px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            left: { xs: "20px", sm: "40px", md: "60px" },
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
            lineHeight: { xs: "48px", sm: "72px", md: "96px" },
            letterSpacing: "0%",
            zIndex: 2,
            maxWidth: { xs: "200px", sm: "300px", md: "400px" },
          }}
        >
          Buy 2 Get 1 Free
        </Typography>
      </Box>

      <Box
        sx={{
          gridArea: "second",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          height: { xs: "250px", sm: "180px", lg: "265px" },
          width: "100%",
        }}
      >
        <Box
          component="img"
          src="images/Grid-Images/img2.jpeg"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          gridArea: "third",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          height: { xs: "250px", sm: "200px", lg: "265px" },
          width: "100%",
        }}
      >
        <Box
          component="img"
          src="images/Grid-Images/img3.jpeg"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default GridImages;

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

type Dummy_Menu_Data = {
  image: string;
  title: string;
}[];

const DUMMY_MENU_DATA: Dummy_Menu_Data = [
  { image: "./images/menus/menu1.png", title: "Dining Menu" },
  { image: "./images/menus/menu2.png", title: "Takeaway Menu" },
  { image: "./images/menus/menu1.png", title: "Dining Menu" },
  { image: "./images/menus/menu2.png", title: "Takeaway Menu" },
];

const Restaurant = () => {
  return (
    <>
      {/* Restaurant meals images */}
      <Box
        width={"100%"}
        margin={{ xs: "30px auto", sm: "50px auto" }}
        display={"grid"}
        gridTemplateAreas={{
          xs: '"first" "second" "third"',
          sm: '"first second" "first third"',
        }}
        gridTemplateColumns={{ xs: "1fr", sm: "1.1fr 0.9fr" }}
        gap={"10px"}
      >
        <Box
          component={"img"}
          src={"/images/restaurants/img1.png"}
          alt="Resatuarant meals"
          width={"100%"}
          height={{ xs: "200px", sm: "500px", lg: "600px" }}
          gridArea={"first"}
          overflow={"hidden"}
          sx={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <Box
          component={"img"}
          src={"/images/restaurants/img2.png"}
          alt="Resatuarant meals"
          width={"100%"}
          height={{ xs: "200px", sm: "245px", lg: "295px" }}
          gridArea={"second"}
          overflow={"hidden"}
          sx={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <Box
          component={"img"}
          src={"/images/restaurants/img3.png"}
          alt="Resatuarant meals"
          width={"100%"}
          height={{ xs: "200px", sm: "245px", lg: "295px" }}
          gridArea={"third"}
          overflow={"hidden"}
          sx={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </Box>

      {/* Resatuarant Info  */}
      <Container maxWidth="md">
        <Grid2 container spacing={"20px"}>
          {/* Restaurant logo */}
          <Grid2
            size={{ xs: 12, sm: 3 }}
            display={"flex"}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={{ xs: "center", sm: "self-start" }}
          >
            <Box
              component={"img"}
              src={"/images/Menu/brands/brand1.png"}
              alt={"Restaurant logo"}
              //   width={{ xs: "100px", sm: "150px", md: "187px" }}
              //   height={{ xs: "100px", sm: "150px", md: "186px" }}
            />
          </Grid2>
          {/* Restaurant info content */}
          <Grid2 size={{ xs: 12, sm: 9 }} width={"100%"}>
            <Stack
              width={"87%"}
              margin="auto"
              gap={"15px"}
              direction={"column"}
            >
              <Typography
                fontFamily={"Poppins"}
                fontWeight={{ xs: 500, sm: 600 }}
                fontSize={{ xs: "28px", sm: "36px" }}
                lineHeight={{ xs: "42px", sm: "54px" }}
                letterSpacing="0%"
                color={"#000000"}
              >
                La Pino'z Pizza
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                gap="15px"
              >
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  lineHeight={{ xs: "20px", sm: "24px" }}
                  letterSpacing="0%"
                  color="#999999"
                >
                  Pizza, Fast Food, Beverages
                </Typography>
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  lineHeight={{ xs: "20px", sm: "24px" }}
                  letterSpacing="0%"
                  color="#999999"
                >
                  Average Cost:{" "}
                  <span style={{ fontWeight: "400", color: "#000000" }}>
                    700rs per 2 person
                  </span>
                </Typography>
              </Stack>
              <Typography
                fontFamily={"Poppins"}
                fontWeight={300}
                fontSize={{ xs: "13px", sm: "16px" }}
                lineHeight={{ xs: "20px", sm: "24px" }}
                letterSpacing="0%"
                color="#999999"
              >
                Vesu, Surat
              </Typography>
              <Typography
                fontFamily={"Poppins"}
                fontWeight={300}
                fontSize={{ xs: "13px", sm: "16px" }}
                lineHeight={{ xs: "20px", sm: "24px" }}
                letterSpacing="0%"
                color="#999999"
              >
                <span style={{ color: "red" }}>Open Now</span> 11am – 11pm
                (Today)
              </Typography>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={{ xs: 2, sm: 3 }}
                width="100%"
                alignItems={{ xs: "center" }}
              >
                {["Order Online", "Directions", "Share"].map((text) => (
                  <Button
                    key={text}
                    sx={{
                      width: { xs: "80%", sm: "33%" },
                      paddingy: { xs: 1, sm: 1.5 },
                      border: "2px solid #FFA500",
                      color: "#000000",
                      //   transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#FFA500",
                        borderColor: "#FFA500",
                        "& .MuiTypography-root": {
                          color: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <Typography
                      fontFamily="Poppins"
                      fontWeight={500}
                      fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                      color="inherit"
                    >
                      {text}
                    </Typography>
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="lg" sx={{ margin: "80px auto" }}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={"24px"}
          lineHeight={"36px"}
          letterSpacing="0%"
          color={"#000000"}
        >
          Menu
        </Typography>

        <Grid2 container spacing={"30px"}>
          {DUMMY_MENU_DATA.map((menu) => {
            return (
              <Grid2
                size={{ xs: 6, sm: 4 }}
                marginTop={"30px"}
                key={menu.title} //key is repeatiing when same data is passed
              >
                <Box
                  component={"img"}
                  src={menu.image}
                  alt={"menu"}
                  borderRadius={"20px"}
                  width={"100%"}
                />
                <Typography
                  margin={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                  letterSpacing="0%"
                  color={"#000000"}
                >
                  {menu.title}
                </Typography>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>

      {/* <RestaurantOrderOnline /> */}
    </>
  );
};

export default Restaurant;

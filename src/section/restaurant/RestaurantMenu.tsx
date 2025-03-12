import React, { useEffect, useState } from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import restaurants from "../../data/restaurantsData";
import { RestaurantItem } from "../../types/type";

interface restaurantProps {
  id: string;
}

const RestaurantMenu: React.FC<restaurantProps> = ({ id }) => {
  const [restaurant, setRestaurant] = useState<RestaurantItem | null>(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const fetchedRestaurant =
        restaurants.find((restaurant) => restaurant.id === id) || null;
      setRestaurant(fetchedRestaurant);
    };

    fetchRestaurantData();
  }, [id]);

  return (
    <>
      <Container maxWidth="lg" sx={{ margin: "80px auto" }}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "24px" }}
          lineHeight={{ xs: "40px", sm: "36px" }}
          letterSpacing="0%"
          color={"#000000"}
          textAlign={{ xs: "center", sm: "left" }}
        >
          Menu
        </Typography>

        <Grid2
          container
          spacing={{ xs: "40px", sm: "30px" }}
          padding={{ xs: "10px", sm: "0" }}
        >
          {restaurant?.menuImages.map((image) => {
            return (
              <Grid2
                size={{ xs: 12, sm: 6, md: 4 }}
                marginTop={"30px"}
                key={restaurant?.id}
              >
                <Box
                  component={"img"}
                  src={image}
                  alt={restaurant?.title}
                  borderRadius={"20px"}
                  width={"100%"}
                  height={{ xs: "100%", sm: "500px" }}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
                <Typography
                  margin={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                  letterSpacing="0%"
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Menu-1
                  {/* {restaurant.title} */}
                </Typography>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </>
  );
};

export default RestaurantMenu;

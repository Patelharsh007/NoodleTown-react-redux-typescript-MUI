import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import restaurants from "../../data/restaurantsData";
import { RestaurantItem } from "../../types/type";

interface restaurantProps {
  id: string;
}

const RestaurantBanner: React.FC<restaurantProps> = ({ id }) => {
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
          src={restaurant?.posterImages[0]}
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
          src={restaurant?.posterImages[1]}
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
          src={restaurant?.posterImages[2]}
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
    </>
  );
};

export default RestaurantBanner;

import React from "react";
import { Box, Grid2 } from "@mui/material";

import FoodCategoryGroupCard from "../UI/FoodCategoryGroupCard";

type foodByCategoryGroup = {
  groupName: string;
  groupDetails: string;
  groupImage: string;
};

const DUMMY_FOOD_BY_CATEGORY_DATA: foodByCategoryGroup[] = [
  {
    groupName: "Veggie friendly",
    groupDetails: "29 places near you",
    groupImage: "images/Menu/foodGroupCategory/img1.png",
  },
  {
    groupName: "Authentic",
    groupDetails: "15 places near you",
    groupImage: "images/Menu/foodGroupCategory/img2.jpg",
  },
  {
    groupName: "Trending this week",
    groupDetails: "10 places near you",
    groupImage: "images/Menu/foodGroupCategory/img3.jpg",
  },
];

const FoodCategoryGroup: React.FC = () => {
  return (
    <>
      <Box
        maxWidth={"1600px"}
        width={"90%"}
        margin={{ xs: "40px auto", sm: "60px auto", md: "80px auto" }}
        padding={{ xs: "15px", sm: "10px" }}
      >
        <Grid2 container spacing={{ xs: "20px", sm: "40px", md: "50px" }}>
          {DUMMY_FOOD_BY_CATEGORY_DATA.map((data) => (
            <FoodCategoryGroupCard Card={data} key={data.groupName} />
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default FoodCategoryGroup;

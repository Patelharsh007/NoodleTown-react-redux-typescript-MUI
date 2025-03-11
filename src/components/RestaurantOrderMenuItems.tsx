import {
  Box,
  Grid2,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { Link } from "react-router-dom";

import { MealItem } from "../types/type";

interface RestaurantOrderMenuItemsProps {
  mealItem: MealItem[];
  Category: string | null;
  onAddToCart: (meal: MealItem) => void;
  onIsItemInCart: (id: string) => boolean;
  onIncrementItem: (id: string) => void;
  onDecrementItem: (id: string) => void;
  onGetItemQuantity: (id: string) => number;
}

const RestaurantOrderMenuItems: React.FC<RestaurantOrderMenuItemsProps> = ({
  mealItem,
  Category,
  onAddToCart,
  onDecrementItem,
  onIncrementItem,
  onIsItemInCart,
  onGetItemQuantity,
}) => {
  return (
    <>
      <Grid2
        size={{ xs: 12, sm: 9 }}
        paddingLeft={{ xs: "0px", sm: "30px" }}
        marginTop={{ xs: "30px", sm: "0px" }}
        sx={{
          height: { xs: "auto", sm: "80vh" },
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          fontFamily="Poppins"
          fontWeight={500}
          fontSize={{ xs: "26px", sm: "28px", md: "32px" }}
          lineHeight={{ xs: "38px", sm: "44px", md: "48px" }}
        >
          {Category}
        </Typography>

        <Grid2
          container
          size={12}
          spacing={{ xs: 1, sm: 2 }}
          marginTop={{ xs: "20px", sm: "30px" }}
          direction={{ xs: "column", sm: "row" }}
          paddingRight={"16px"}
          sx={{
            overflowY: { sm: "auto" },
            maxHeight: { sm: "75vh" },
            whiteSpace: { sm: "normal" },
            msOverflowStyle: { sm: "none" },
            scrollbarWidth: { sm: "thin" },
            overscrollBehaviorY: { sm: "auto" },
            scrollbarColor: { sm: "#f8f8f8 transparent" },
            overflowX: "hidden",
            "& .MuiTypography-root": {
              wordBreak: "break-word",
              whiteSpace: "normal",
            },
            "&::-webkit-scrollbar": {
              display: { sm: "none" },
            },
            "&::-webkit-scrollbar-button": {
              display: { sm: "none" },
            },
            scrollBehavior: "smooth",
          }}
        >
          {mealItem
            .filter((meal) =>
              Category === "Recommended"
                ? meal.isPopular === true
                : meal.category === Category
            )
            .map((meal) => {
              return (
                <React.Fragment key={meal.id}>
                  <Grid2 size={{ xs: 12, sm: 6 }} paddingY={"10px"}>
                    <Link
                      to={`/product/${meal.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        component={"img"}
                        src={meal.image}
                        alt={meal.title}
                        width={{ xs: "100%", sm: "95%" }}
                        margin={"auto"}
                        // height={"100%"}
                        height={{ xs: "190px", sm: "270px" }}
                        borderRadius={"16px"}
                        sx={{
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </Link>
                  </Grid2>

                  <Grid2
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                      marginBottom: "50px",
                    }}
                  >
                    <Stack
                      spacing={{ xs: "2px", sm: "9px" }}
                      paddingTop={{ sm: "5px" }}
                    >
                      <Typography
                        fontFamily="Poppins"
                        fontWeight={400}
                        fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                        lineHeight={{
                          xs: "30px",
                          sm: "28px",
                          md: "30px",
                        }}
                      >
                        {meal.title}
                      </Typography>
                      <Typography
                        fontFamily="Poppins"
                        fontWeight={400}
                        fontSize={{ xs: "14px", sm: "12px", md: "14px" }}
                        lineHeight={{
                          xs: "21px",
                          sm: "18px",
                          md: "21px",
                        }}
                        color="#848484"
                      >
                        {meal.shortDescription}
                      </Typography>
                      <Typography
                        fontFamily="Poppins"
                        fontWeight={400}
                        fontSize={{ xs: "20px", sm: "18px", md: "20px" }}
                        lineHeight={{
                          xs: "30px",
                          sm: "28px",
                          md: "30px",
                        }}
                      >
                        ₹{meal.price}
                      </Typography>
                      {onIsItemInCart(meal.id) ? (
                        <ButtonGroup
                          disableElevation
                          sx={{
                            height: "45px",
                            width: "175px",
                            "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                              borderColor: "transparent",
                            },
                          }}
                        >
                          <Button
                            onClick={() => onDecrementItem(meal.id)}
                            sx={{
                              flex: 1,
                              backgroundColor: "#999999",
                              color: "#ffffff",
                              "&:hover": {
                                backgroundColor: "#888888",
                                color: "#f3f3f3",
                              },
                            }}
                          >
                            <RemoveIcon />
                          </Button>
                          <Button
                            sx={{
                              flex: 2,
                              backgroundColor: "#f9f9f9",
                              color: "#000000",
                              borderLeft: "1px solid rgba(0,0,0,0.1)",
                              borderRight: "1px solid rgba(0,0,0,0.1)",
                              "&:hover": {
                                backgroundColor: "#d9d9d9",
                              },
                              cursor: "default",
                            }}
                            disableRipple
                          >
                            <Typography
                              fontFamily="Poppins"
                              fontWeight={400}
                              fontSize={{
                                xs: "18px",
                                sm: "16px",
                                md: "18px",
                              }}
                            >
                              {onGetItemQuantity(meal.id)}
                            </Typography>
                          </Button>
                          <Button
                            onClick={() => onIncrementItem(meal.id)}
                            sx={{
                              flex: 1,
                              backgroundColor: "#FFA500",
                              color: "#FFFFFF",
                              "&:hover": {
                                backgroundColor: "#FFC300",
                              },
                            }}
                          >
                            <AddIcon />
                          </Button>
                        </ButtonGroup>
                      ) : (
                        <Button
                          onClick={() => onAddToCart(meal)}
                          sx={{
                            width: "175px",
                            backgroundColor: "#FFA500",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#FFC300",
                            },
                          }}
                        >
                          <Typography
                            fontFamily="Poppins"
                            fontWeight={400}
                            fontSize={{
                              xs: "20px",
                              sm: "18px",
                              md: "20px",
                            }}
                            lineHeight={{
                              xs: "30px",
                              sm: "28px",
                              md: "30px",
                            }}
                          >
                            Add to Cart
                          </Typography>
                        </Button>
                      )}
                    </Stack>
                  </Grid2>
                </React.Fragment>
              );
            })}
          {mealItem.filter((meal) =>
            Category === "Recommended" ? true : meal.category === Category
          ).length === 0 && (
            <Typography
              fontFamily="Poppins"
              textAlign="center"
              width="100%"
              color="#666"
            >
              No items available in this category
            </Typography>
          )}
        </Grid2>
      </Grid2>
    </>
  );
};

export default RestaurantOrderMenuItems;

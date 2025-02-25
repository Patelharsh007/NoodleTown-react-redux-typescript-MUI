import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const DiningOut = () => {
  const DUMMY_DINING_OUT_DATA: {
    imgurl: string;
    heading: string;
    statement: string;
  } = {
    imgurl: "/images/Dining_Out/img3.jpeg",
    heading: "Dining Out",
    statement: "Explore curated lists of top restaurants",
  };

  return (
    <>
      <>DiningOut</>
      <Box
        sx={{
          width: "100%",
          margin: "auto 20px",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: "8px",
            boxShadow: "0px 4px 4px 0px #0000001A",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={DUMMY_DINING_OUT_DATA.imgurl}
            alt="Image description"
          />
          <CardContent>
            <Typography
              component="div"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                color: "#000000",
              }}
            >
              {DUMMY_DINING_OUT_DATA.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {DUMMY_DINING_OUT_DATA.statement}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <>Over</>
    </>
  );
};

export default DiningOut;

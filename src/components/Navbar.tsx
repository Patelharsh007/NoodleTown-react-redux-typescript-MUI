import * as React from "react";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Badge, Container, Stack, Box } from "@mui/material";

type NavbarProps = {
  linkColor?: string;
};

const Navbar = (props: NavbarProps) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1600px",
          width: "95%",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "100%",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#ffc300",
              }}
            >
              Noodletown
            </Link>
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 0, sm: 9 }}
            sx={{
              justifyContent: { xs: "space-between" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
                color: "#ffc300",
                letterSpacing: "0",
              }}
            >
              <Link
                to="/menu"
                style={{
                  textDecoration: "none",
                  color: props.linkColor,
                }}
              >
                Menu
              </Link>
            </Typography>

            <Stack
              sx={{
                padding: "0 15px",
              }}
            >
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: props.linkColor,
                }}
              >
                <Badge
                  badgeContent={5}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#ffc300",
                      color: props.linkColor,
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Container,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteOrder } from "../redux/slices/OrderSlice";

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.order.orders);
  const handleDeleteOrder = (orderId: string) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: "16px", sm: "24px", md: "32px" },
        px: { xs: "8px", sm: "16px", md: "px24" },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        fontFamily={"Poppins"}
        fontSize={{ xs: "16px", sm: "32px", md: "36px" }}
        fontWeight={"bold"}
        marginBottom={{ xs: "16px", sm: "24px", md: "32px" }}
      >
        My Orders
      </Typography>

      {orders.length === 0 ? (
        <Paper
          sx={{
            padding: { xs: "16px", sm: "24px", md: "32px" },
            textAlign: "center",
          }}
        >
          <Typography color="text.secondary">No orders placed yet.</Typography>
        </Paper>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: "16px", sm: "20px", md: "24px" }}
        >
          {orders.map((order) => (
            <Paper
              key={order.id}
              elevation={2}
              sx={{
                overflow: "hidden",
                borderRadius: { xs: "8px", sm: "12px", md: "16px" },
              }}
            >
              {/* Order Header */}
              <Box
                padding={{ xs: "12px", sm: "16px", md: "20px" }}
                border={2}
                borderColor={"#f3f3f3"}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: "4px", sm: 0 }}
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                >
                  <Stack direction="row" alignItems="center" spacing={4}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily={"Poppins"}
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Order ID:
                    </Typography>
                    <Typography
                      variant="body1"
                      fontFamily={"Poppins"}
                      fontSize={{ xs: "14px", sm: "16px" }}
                      fontWeight={"medium"}
                    >
                      {order.id}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: "4px", sm: "8px" }}
                  >
                    <Chip
                      label={order.status}
                      color={"info"}
                      sx={{
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    />
                    <IconButton
                      onClick={() => handleDeleteOrder(order.id)}
                      color="error"
                      sx={{ fontSize: { xs: "16px", sm: "20px" } }}
                    >
                      <DeleteIcon
                        sx={{ fontSize: { xs: "16px", sm: "20px" } }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>

                <Stack
                  direction="column"
                  spacing={"8px"}
                  marginTop={{ xs: "16px", sm: "24px" }}
                >
                  <Stack direction="row" spacing={"4px"}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Date:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      {new Date(order.Date).toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={"4px"}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Address:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={{ xs: "12px", sm: "14px" }}
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {order.address}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* Order Items */}
              <Box sx={{ p: { xs: "12px", sm: "16px", md: "20px" } }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: { xs: "12px", sm: "14px" },
                            padding: { xs: "8px", sm: "16px" },
                          }}
                        >
                          Item
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: { xs: "12px", sm: "14px" },
                            padding: { xs: "8px", sm: "16px" },
                          }}
                        >
                          Qty
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: { xs: "12px", sm: "14px" },
                            padding: { xs: "8px", sm: "16px" },
                          }}
                        >
                          Price
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: { xs: "12px", sm: "14px" },
                            padding: { xs: "8px", sm: "16px" },
                          }}
                        >
                          Total
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              fontSize: { xs: "12px", sm: "14px" },
                              padding: { xs: "8px", sm: "16px" },
                            }}
                          >
                            {item.itemName}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              fontSize: { xs: "12px", sm: "14px" },
                              padding: { xs: "8px", sm: "16px" },
                            }}
                          >
                            {item.quantity}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              fontSize: { xs: "12px", sm: "14px" },
                              padding: { xs: "8px", sm: "16px" },
                            }}
                          >
                            ${item.price.toFixed(2)}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              fontSize: { xs: "12px", sm: "14px" },
                              padding: { xs: "8px", sm: "16px" },
                            }}
                          >
                            ${item.itemTotal.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Order Summary */}
              <Box
                padding={{ xs: "12px", sm: "16px", md: "20px" }}
                sx={{
                  backgroundColor: "rgba(244, 244, 244, 0.8)",
                }}
              >
                <Stack
                  spacing={"8px"}
                  maxWidth={{ xs: "100%", sm: "300px" }}
                  marginLeft={{ xs: 0, sm: "auto" }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      ${order.subTotal.toFixed(2)}
                    </Typography>
                  </Stack>
                  {order.discount > 0 && (
                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        variant="body2"
                        color="success.main"
                        fontSize={{ xs: "12px", sm: "14px" }}
                      >
                        Discount
                      </Typography>
                      <Typography
                        variant="body2"
                        color="success.main"
                        fontSize={{ xs: "12px", sm: "14px" }}
                      >
                        -${order.discount.toFixed(2)}
                      </Typography>
                    </Stack>
                  )}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    paddingTop={"16px"}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                    >
                      ${order.total.toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Orders;

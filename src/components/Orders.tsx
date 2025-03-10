import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { deleteOrder } from "../redux/slices/OrderSlice";

const Orders: React.FC = () => {
  const dispatch = useDispatch();

  // Get the orders from the Redux state
  const orders = useSelector((state: RootState) => state.order.orders);

  // Handle deleting an order
  const handleDeleteOrder = (orderId: string) => {
    dispatch(deleteOrder(orderId));
  };

  // State to handle expanding/collapsing the order details
  const [expanded, setExpanded] = useState<string | null>(null);

  // Toggle collapse state for each order's items
  const handleToggleExpand = (orderId: string) => {
    setExpanded(expanded === orderId ? null : orderId);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No orders placed yet.
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <React.Fragment key={order.id}>
                {/* Order Row */}
                <TableRow>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    {new Date(order.Date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleToggleExpand(order.id)}
                      sx={{ marginLeft: 1 }}
                    >
                      {expanded === order.id ? "Hide Items" : "Show Items"}
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Collapsible Items Section */}
                <TableRow>
                  <TableCell colSpan={6} sx={{ padding: 0 }}>
                    <Collapse
                      in={expanded === order.id}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ padding: 2 }}>
                        <Typography variant="h6">Ordered Items:</Typography>
                        <Table sx={{ marginTop: 2 }} size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Item Name</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Subtotal</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.items.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell>{item.itemName}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.price.toFixed(2)}</TableCell>
                                <TableCell>
                                  {item.itemTotal.toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;

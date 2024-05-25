import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const transactions = [
  {
    time: "09:30 am",
    type: "Payment received",
    description: "from John Doe of $385.90",
    color: blue[500],
  },
  {
    time: "10:00 am",
    type: "New sale recorded",
    description: "#ML-3467",
    color: blue[300],
  },
  {
    time: "12:00 am",
    type: "Payment was made",
    description: "of $64.95 to Michael",
    color: green[500],
  },
  {
    time: "09:30 am",
    type: "New sale recorded",
    description: "#ML-3467",
    color: orange[500],
  },
  {
    time: "09:30 am",
    type: "New arrival recorded",
    description: "",
    color: red[500],
  },
  {
    time: "12:00 am",
    type: "Payment Received",
    description: "",
    color: green[500],
  },
];

export const RecentTransactions = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: 600 }}>
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((transaction, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{ pl: 0, display: "flex", alignItems: "center" }}
            >
              <Typography sx={{ minWidth: 70 }}>{transaction.time}</Typography>
              <CircleOutlinedIcon
                sx={{ color: transaction.color, fontSize: 12, mx: 2 }}
              />
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: transaction.color,
                      display: "inline",
                      fontWeight: "bold",
                    }}
                  >
                    {transaction.type}
                  </Typography>
                }
                secondary={
                  transaction.description && (
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ display: "block" }}
                    >
                      {transaction.description}
                    </Typography>
                  )
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

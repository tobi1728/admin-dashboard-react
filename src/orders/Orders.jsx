import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import DoneIcon from "@mui/icons-material/Done";
import Tooltip from "@mui/material/Tooltip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { ordersMock } from "./mocks/ordersMock";

export const Orders = () => {
  const [orders, setOrders] = React.useState(ordersMock);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "product",
      headerName: "Product",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "orderValue",
      headerName: "Order Value",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => capitalizeFirstLetter(params.value),
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 180,
      renderCell: (params) => {
        const rowId = params.row.id;

        const markAsPaid = (e) => {
          e.stopPropagation();
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === rowId ? { ...order, status: "paid" } : order
            )
          );
        };

        const markAsSent = (e) => {
          e.stopPropagation();
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === rowId ? { ...order, status: "sent" } : order
            )
          );
        };

        const completeOrder = (e) => {
          e.stopPropagation();
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === rowId ? { ...order, status: "completed" } : order
            )
          );
        };

        switch (params.row.status) {
          case "new":
            return (
              <Tooltip title="Mark as paid">
                <PaymentIcon
                  style={{ cursor: "pointer", color: "orange" }}
                  onClick={markAsPaid}
                />
              </Tooltip>
            );
          case "paid":
            return (
              <Tooltip title="Mark as sent">
                <LocalShippingIcon
                  style={{ cursor: "pointer", color: "#607d8b" }}
                  onClick={markAsSent}
                />
              </Tooltip>
            );
          case "sent":
            return (
              <Tooltip title="Complete order">
                <DoneIcon
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={completeOrder}
                />
              </Tooltip>
            );
          default:
            return (
              <Tooltip title="Completed">
                <CheckCircleIcon color="action" />
              </Tooltip>
            );
        }
      },
    },
  ];

  const rows = orders;

  return (
    <div>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Orders</Typography>
      </Breadcrumbs>
      <DataGrid
        sx={{
          maxWidth: "90%",
          marginLeft: "50px",
          marginTop: "50px",
          padding: 2,
          color: "#5A6A85",
          height: 403,
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableAutosize
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  );
};

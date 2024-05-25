import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, Typography, IconButton } from "@mui/material";
import { AddProduct } from "./AddProduct";
import { productsMock } from "./mocks/productsMock";

export const ProductPage = () => {
  const [productData, setProductData] = React.useState(productsMock);
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);

  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };

  const handleAddProduct = (event) => {
    const { title, text, price, stock, category } = event.target;
    setIsAddingProduct(false);

    const nextId =
      productData.reduce((prev, next) => (next.id > prev ? next.id : prev), 0) +
      1;

    const newProduct = {
      id: nextId,
      title: title.value,
      text: text.value,
      price: parseFloat(price.value), // Ensure price is a number
      stock: stock.value,
      category: category.value,
    };

    setProductData([...productData, newProduct]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 90 },
    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => (
        <img
          src={params.row.image}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },
    { field: "text", headerName: "Description", width: 300 },
    {
      field: "price",
      headerName: "Price",
      width: 90,
      renderCell: (params) => `$${params.value}`, // Display price with $
    },
    { field: "stock", headerName: "Stock", width: 90 },
    { field: "category", headerName: "Category", width: 90 },
    {
      field: "action",
      width: 90,
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const rowId = params.row.id;
          setProductData(productData.filter((product) => product.id !== rowId));
        };

        return (
          <IconButton onClick={onClick}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const rows = productData;

  return (
    <>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Products</Typography>
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
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
      {!isAddingProduct && (
        <IconButton
          variant="contained"
          onClick={handleAddProductClick}
          sx={{
            fontSize: "14px",
            "&:hover": {
              background: "none",
              color: "#5d87ff",
            },
          }}
        >
          <AddIcon /> Add Product
        </IconButton>
      )}
      {isAddingProduct ? <AddProduct onSubmit={handleAddProduct} /> : null}
    </>
  );
};

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  Link,
  Typography,
  IconButton,
  Grid,
  Drawer,
  Box,
  Chip,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { productsMock } from "./mocks/productsMock";
import { useAuth } from "../authProvider";

export const ProductPage = () => {
  const { isLoggedIn } = useAuth();
  const [productData, setProductData] = React.useState(productsMock);
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);

  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };

  const handleAddProductClose = () => {
    setIsAddingProduct(false);
  };

  const handleAddProduct = (newProduct) => {
    setIsAddingProduct(false);

    const nextId =
      productData.reduce((prev, next) => (next.id > prev ? next.id : prev), 0) +
      1;

    const newProductData = {
      id: nextId,
      title: newProduct.title,
      text: newProduct.description,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
      category: newProduct.category,
      image:
        newProduct.images.length > 0
          ? newProduct.images[0]
          : "https://via.placeholder.com/100",
      tags: newProduct.tags,
    };

    setProductData([...productData, newProductData]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
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
    { field: "category", headerName: "Category", width: 120 },
    {
      field: "tags",
      headerName: "Tags",
      width: 300,
      renderCell: (params) => (
        <Box>
          {params.row.tags.map((tag, index) => (
            <Chip sx={{ marginRight: 1 }} key={index} label={tag} />
          ))}
        </Box>
      ),
    },
    {
      field: "action",
      width: 90,
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

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

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Products</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} mt={5} px={5} justifyContent={"center"}>
        <DataGrid
          sx={{
            maxWidth: "90%",
            marginLeft: "50px",
            marginTop: "50px",
            padding: 2,
            color: "#5A6A85",
            height: 403,
            border: 0,
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
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
      </Grid>
      <Grid container spacing={2} mt={5} px={5} justifyContent={"center"}>
        <IconButton
          variant="contained"
          disableRipple
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
      </Grid>
      <Drawer
        anchor="right"
        open={isAddingProduct}
        onClose={handleAddProductClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "400px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <AddProduct
          onSubmit={handleAddProduct}
          onClose={handleAddProductClose}
        />
      </Drawer>
    </>
  );
};

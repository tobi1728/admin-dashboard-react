import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  Chip,
  Grid,
} from "@mui/material";
import { Close as CloseIcon, Add as AddIcon } from "@mui/icons-material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export const AddProduct = ({ onSubmit, onClose }) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    stock: "",
    images: [],
  });

  const imageInputRef = useRef(null);

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProductData({
      ...productData,
      images: files.map((file) => URL.createObjectURL(file)),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...productData, tags });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add New Product
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <TextField
        label="Product name"
        variant="outlined"
        fullWidth
        required
        name="title"
        value={productData.title}
        onChange={handleChange}
      />
      <TextField
        label="Product Description"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        required
        name="description"
        value={productData.description}
        onChange={handleChange}
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          name="category"
          value={productData.category}
          onChange={(e) =>
            setProductData({ ...productData, category: e.target.value })
          }
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Men">Men</MenuItem>
          <MenuItem value="Women">Women</MenuItem>
          <MenuItem value="Unisex">Unisex</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            required
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Stock"
            variant="outlined"
            fullWidth
            required
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Box>
        <Typography variant="body1" gutterBottom>
          Product Images
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #ddd",
            borderRadius: 1,
            padding: 2,
            marginBottom: 2,
            height: "150px",
            cursor: "pointer",
          }}
          onClick={() => imageInputRef.current?.click()}
        >
          <CloudUploadOutlinedIcon />
          <Typography variant="body2" color="textSecondary">
            Drag and drop or browse to upload
          </Typography>
          <input
            type="file"
            ref={imageInputRef}
            multiple
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {productData.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Product"
              style={{
                borderRadius: "8px",
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom>
          Tags
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onDelete={handleDeleteTag(tag)}
              color="primary"
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <TextField
            label="New Tag"
            variant="outlined"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            fullWidth
          />
          <IconButton onClick={handleAddTag} disableRipple>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        <Button
          sx={{ backgroundColor: "#5D87FF", color: "#fff" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
        <Button
          sx={{ backgroundColor: "#5D87FF", color: "#fff" }}
          variant="contained"
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

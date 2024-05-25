import * as React from 'react'

import { Box, Grid, Button, FormControl, FormLabel, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddProduct = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>            
    <Grid sx={{display: "flex", flexDirection: "column", marginTop: 5, margin: "auto"}}>
            <Box sx={{display: "flex", flexDirection: "row", width: "800px", margin: "auto", marginTop: 5, alignItems: "center"}}>
            <FormLabel sx={{marginRight: 2, marginLeft: 2, color: "5D87FF"}}>Title</FormLabel>
            <TextField name="title" />
            <FormLabel sx={{marginRight: 2, marginLeft: 2}}>Description</FormLabel>
            <TextField name="text" />
            <FormLabel sx={{marginRight: 2, marginLeft: 2}}>Price</FormLabel>
            <TextField name="price" />
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", width: "800px", margin: "auto", marginTop: 5, alignItems: "center"}}>
      
            <FormLabel sx={{marginRight: 2, marginLeft: 2}}>Stock</FormLabel>
            <TextField name="stock" />
            <FormLabel sx={{marginRight: 2, marginLeft: 2}}>Category</FormLabel>
            <TextField name="category" />
           
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", margin: "auto", marginTop: 5}}> 
            <Button variant="contained" type="submit" sx={{
              background: "#5d87ff",
              color: "#fff",
              width: "100%",
              textTransform: "capitalize",
              "&:hover": {
                background: "#ECF2FF",
                color: "#5d87ff",
              },
            }}
            disableRipple><AddIcon />Add</Button>
            </Box>
            </Grid>    
        </form>
    )
}


// Create a new page component: <ProductDetails />.
// Alter each product on the listing screen to have a new “Product Details” button.
// When clicked, <Link to...> /products/## where ## is the product ID.
// On this page, show an expanded view of the product, including placeholders for additional information such as reviews, suggestions, etc.

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//MUI
import { emphasize, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id);

  return (
    <>
      <Box
        component="main"
        sx={{
          py: 1,
          px: 2,
          width: "100%",
          pb: 15,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        }}
      >
        <Container>
          <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
            Product Details
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Card sx={{ maxWidth: 345, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductDetails;

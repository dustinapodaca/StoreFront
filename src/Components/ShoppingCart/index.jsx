// Create a new page component: <ShoppingCart />
// Link to this page from the Cart (x) in the header, on the /cart route.
// On this page, show:
// A summary of items in tabular format.
// A final order total.
// A form allowing the user to enter their billing/shipping address and credit card information.
// On submit, simply draw an alert that says “Thank you for your purchase”
// We will not be processing transactions or storing orders just yet.

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../../Store/cart';
import { Link } from 'react-router-dom';

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

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
            Shopping Cart
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {cart.map((item) => (
              <Card sx={{ maxWidth: 345, m: 1 }} key={item.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => dispatch(removeFromCart(item))} size="small">Remove from Cart</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ShoppingCart;

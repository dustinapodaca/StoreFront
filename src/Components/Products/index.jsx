import React from 'react';
import { connect } from "react-redux";

import { addToCart } from '../../Store/cart';

//MUI
// import { emphasize, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


const Products = (props) => {
  const { products, activeCategory } = props;
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
            Products
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {activeCategory && products.map((product) => (
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                {/* <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => addToCart(product)} size="small">Add to Cart</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.activeCategory,
    cart: state.cart.cart,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

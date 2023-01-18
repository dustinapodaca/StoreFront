import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <Box
        component="header"
        sx={{
          py: 2,
          px: 2,
          width: "100%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[900],
        }}
      >
        <Container>
          <Typography variant="h4" component="h1">
            <h1>🌱 plant.space</h1>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Header;

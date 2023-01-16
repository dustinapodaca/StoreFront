import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
              : theme.palette.grey[800],
        }}
      >
        <Container>
          <h1>plant.space</h1>
        </Container>
      </Box>
    </>
  );
};

export default Header;

import React from 'react' ;
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container>
          <p>&copy; 2023 plant.space</p>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
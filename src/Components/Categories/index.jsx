import React from 'react';
import { connect } from 'react-redux';

//MUI
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import ForestIcon from '@mui/icons-material/Forest';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GrassIcon from '@mui/icons-material/Grass';
import { Typography } from '@mui/material';
import { green } from '@mui/material/colors';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
    activeCategory: state.activeCategory,
  };
};

const Categories = (props) => {
  return (
    <>
      <Box
        component="nav"
        sx={{
          py: 1,
          px: 2,
          width: "100%",
          paddingBottom: "10px",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        }}
      >
        <Container>
          <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
            Browse our Categories
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Bonsai Trees"
              name="bonsai-trees"
              icon={<ForestIcon fontSize="small" sx={{ color: green[500] }} />}
              onClick={() => {
                props.dispatch({ type: "ACTIVE", payload: "bonsai-trees" });
              }}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Indoor Plants"
              name="indoor-plants"
              icon={<LocalFloristIcon fontSize="small" sx={{ color: green[500] }} />}
              onClick={() => {
                props.dispatch({ type: "ACTIVE", payload: "indoor-plants" });
              }}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Succulents"
              name="succulents"
              value="bonsai-trees"
              icon={<GrassIcon fontSize="small" />}
              onClick={() => {
                props.dispatch({ type: "ACTIVE", payload: "succulents" });
              }}
            />
          </Breadcrumbs>
        </Container>
      </Box>
    </>
  );
}

export default connect(mapStateToProps)(Categories);

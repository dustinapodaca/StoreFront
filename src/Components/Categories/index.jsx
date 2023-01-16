import React from 'react';
import { connect } from 'react-redux';

//MUI
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import ForestIcon from '@mui/icons-material/Forest';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GrassIcon from '@mui/icons-material/Grass';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
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
    activeCategory: state.activeCategory,
  };
};

const Categories = (props) => {

  return (
    <>
      <h2>Browse our Categories</h2>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Bonsai Trees"
          name="bonsai-trees"
          icon={<ForestIcon fontSize="small" />}
          onClick={() => {
            props.dispatch({ type: "ACTIVE", payload: "bonsai-trees" });
          }}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Indoor Plants"
          name="indoor-plants"
          icon={<LocalFloristIcon fontSize="small" />}
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
    </>
  );
}

export default connect(mapStateToProps)(Categories);

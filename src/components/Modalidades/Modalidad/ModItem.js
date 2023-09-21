import React from "react";
import { Grid } from "@mui/material";
import "./ModItem.css";

const ModItem = ({ mod }) => {
  const { image, title, description } = mod;
  return (
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
      <div className="modContainer">
      <div className="whiteCircle">
        <img src={image} alt="modalidad" width="110" height="110" />
      </div>
      </div>
    </Grid>
  );
};

export default ModItem;

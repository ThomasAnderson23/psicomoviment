import React from "react";
import { Grid } from "@mui/material";
import "./PrinItem.css";

const PrinItem = ({ prin }) => {
  const { image, title, description } = prin;
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ marginBottom: "150px" }}
      >
        <div className="prinImage">
          <img
            src={image}
            alt="principle"
            width="600px"
            height="850px"
            className="modImage1"
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          color: "#000",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </Grid>
    </Grid>
  );
};

export default PrinItem;

import React from "react";
import { Grid } from "@mui/material";
import "./PrinItem.css";

const PrinItem = ({ prin }) => {
  const { image, title, description } = prin;
  return (
    <Grid container alignItems={"center"}>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        //sx={{ marginBottom: "150px" }}
      >
        <div className="prinImage">
          <img src={image} alt="principle" width="600px" height="1080px" />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4.2}
        lg={3.9}
        xl={3.9}
        sx={{
          color: "#000",
          fontWeight: "light",
          fontSize: "10px",
          height: "720px",
          marginLeft: "80px"
        }}
      >
        <h3 className="PrinTitle">{title}</h3>
        <p className="PrinDescription">{description}</p>
      </Grid>
    </Grid>
  );
};

export default PrinItem;

import React from "react";
import { Grid } from "@mui/material";
import "./PrinItem.css";

const PrinItem = ({ prin }) => {
  const { image, title, description } = prin;
  return (
    <Grid
      container
      sx={{ width: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={5}
        xl={4}
        sx={{ textAlign: "center" }}
      >
        <img src={image} alt="principle" width={350} height={500} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={5}
        xl={5}
        sx={{
          color: "#000",
          fontWeight: "normal",
          fontSize: "10px",
          m: "20px",
        }}
      >
        <h3 className="PrinTitle">{title}</h3>
        <p className="PrinDescription">{description}</p>
      </Grid>
    </Grid>
  );
};

export default PrinItem;

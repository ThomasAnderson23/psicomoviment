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
          <img src={image} alt="principle" width={350} height={500}/>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        sx={{
          color: "#000",
          fontWeight: "normal",
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

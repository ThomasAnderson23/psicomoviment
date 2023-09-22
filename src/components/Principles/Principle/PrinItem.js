import React from "react";
import { Grid } from "@mui/material";
import "./PrinItem.css";

const PrinItem = ({ prin }) => {
  const { image, title, description } = prin;
  return (
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} sx={{ textAlign: "center" }}>
      <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ marginBottom:"150px"}}>

        <div className="modContainer">
          <div className="whiteCircle">
            <img
              src={image}
              alt="modalidad"
              width="100"
              height="100"
              className="modImage1"
            />
          </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ fontWeight:"bold", fontSize: "28px", marginTop: "-15px"}}>
        {title}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ fontWeight:"1px", fontSize: "14px", marginTop: "15px"}}>
        {description}
        </Grid>

      </Grid>
    </Grid>
  );
};

export default PrinItem;

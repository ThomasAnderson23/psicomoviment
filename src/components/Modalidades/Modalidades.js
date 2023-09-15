import React from "react";
import "./Modalidades.css";
import { Grid } from "@mui/material";

const Modalidades = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="general-padding"
      spacing={4}
      sx={{ paddingBottom: "150px", paddingTop: "150px", height: "100%" }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='dark-blue m-0'>
        <h3 className='m-0'>Modalidades</h3>
        <h2 className='m-0'>Estrategias a medida</h2>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
      </Grid>
    </Grid>
  );
};

export default Modalidades;

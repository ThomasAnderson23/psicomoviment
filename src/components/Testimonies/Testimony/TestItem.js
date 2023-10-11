import React from "react";
import { Grid } from "@mui/material";
import "./TestItem.css";

const TestItem = ({ test }) => {
  const { description } = test;
  return (
    <Grid container className="testText">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textIndent: "3ch" }}>
        "{description}"
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ paddingTop: "50px"}}> 
     <strong> Benjamín Vergara  </strong> 
     <h4> Entrenador de natación Estadio Español de Las Condes, 2016-2023 </h4>
      </Grid>
    </Grid>
  );
};

export default TestItem;

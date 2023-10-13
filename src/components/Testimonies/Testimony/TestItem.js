import React from "react";
import { Grid } from "@mui/material";
import "./TestItem.css";

const TestItem = ({ test }) => {
  const { description } = test;
  return (
    <Grid container className="testText" justifyContent={"center"} sx={{ width: "100%"}}>
      <Grid item xs={9} sm={9} md={9} lg={10} xl={9}>
        <strong style={{ marginTop: "50px" }}> Benjamín Vergara </strong>

        <h4>
          {" "}
          Entrenador de natación Estadio Español de Las Condes, 2016-2023{" "}
        </h4>
        <p>"{description}"</p>
      </Grid>
    </Grid>
  );
};

export default TestItem;

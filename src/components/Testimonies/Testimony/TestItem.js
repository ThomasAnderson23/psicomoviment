import React from "react";
import { Grid } from "@mui/material";
import "./TestItem.css";

const isMobile =
  !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;

const TestItem = ({ test }) => {
  const { description } = test;
  return (
    <div className="testText">
        <p>"{description}"</p>
        <strong style={{ marginTop: "50px" }}> Benjamín Vergara </strong>
        <h4>
          {" "}
          Entrenador de natación Estadio Español de Las Condes, 2016-2023{" "}
        </h4>
    </div>
  );
};

export default TestItem;

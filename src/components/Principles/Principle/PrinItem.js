import React from "react";
import { Grid } from "@mui/material";
import "./PrinItem.css";

const isMobile =
    !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;
const imageWidth = isMobile ? 250 : 350;
const imageHeight = isMobile ? 400 : 500;

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
        md={6}
        lg={5}
        xl={5}
        sx={{ textAlign: "center" }}
      >
        <img src={image} alt={title} width={imageWidth} height={imageHeight} className="rounded-border" />
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
          fontSize: "16px",
          m: "20px",
        }}
      >
        <div>
          <h3 className="PrinTitle">{title}</h3>
          <p className="PrinDescription">{description}</p>
        </div>
        
      </Grid>
    </Grid>
  );
};

export default PrinItem;

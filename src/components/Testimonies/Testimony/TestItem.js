import React from "react";
import { Grid } from "@mui/material";
import "./TestItem.css";

const TestItem = ({ test }) => {
  const { description, image, name, title } = test;
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%" }}
    >
      { /* para desktop, dispositivos grandes */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={9}
        sx={{
          textAlign: "center",
          display: { xs: "block", sm: "block", md: "block", lg: "block", xl: "block"  },
        }}
      >
        <img
          src={image}
          alt={name}
          width={150}
          height={150}
          className="circle-portrait"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={9}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block"  },
          textAlign: "center",
          backgroundColor: "#FFF",
          borderRadius: "20px 20px 0px 0px",
          pr: "10px",
          pl: "10px",
          pt: "30px",
        }}
      >
        <strong style={{ marginTop: "50px" }}> {name} </strong>
        <h4>{title}</h4>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={9}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" },
          textAlign: "center",
          backgroundColor: "#FFF",
          borderRadius: "0px 0px 20px 20px",
          pr: "10px",
          pl: "10px",
          pb: "10px",
        }}
      >
        <p>"{description}"</p>
      </Grid>


      { /* para celular, dispositivos chicos */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={9}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
          textAlign: "center",
          borderRadius: {xs: "none", sm: "20px 20px 0px 0px"},
          backgroundColor: { sm: "#FFF", md: "auto" },
          pr: "10px",
          pl: "10px",
        }}
      >
        <p>"{description}"</p>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={10}
        xl={9}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
          textAlign: "center",
          backgroundColor: { sm: "#FFF", md: "auto" },
          borderRadius: {xs: "none", sm: "0px 0px 20px 20px"},
          pr: "10px",
          pl: "10px",
          pb: "10px",
          pt: "30px",
        }}
      >
        <strong style={{ marginTop: "50px" }}> {name} </strong>

        <h4>{title}</h4>
      </Grid>
    </Grid>
  );
};

export default TestItem;

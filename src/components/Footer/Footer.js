import React from "react";
import { Grid } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Logo from "../../static/images/psicomovimentLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Grid
      container
      className="footer"
      justifyContent={"center"}
      spacing={4}
    >
      <Grid item>
        <img src={Logo} alt="psicomovimentLogo" width={115} />
      </Grid>
      <Grid item
          xs={7}
          sm={5}
          md={5}
          lg={4}
          xl={3}
          sx={{ color: "#FFF"}}>
        <div style={{ fontWeight: 800 }}>Oficina Central</div>
        <div>Gral. Holley 2326. Of 1305</div>
        <div>Providencia</div>
        <div style={{ marginBottom: 30 }}>Santiago de Chile</div>
        <div style={{ fontSize: 13 }}>+56 9 9330 1190</div>
        <div style={{ fontSize: 13 }}>Juan.fernandez@psicomoviment.cl</div>
      </Grid>
      <Grid item 
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2} sx={{ fontSize: 10, color: "#FFF" }}>
<div style= {{marginBottom: 8}} >Reserva tu sesión</div>
             <div style= {{marginBottom: 8}}>Sobre Nosotros</div>
             <div style= {{marginBottom: 8}}>Servicios</div>
             <div style= {{marginBottom: 8}}>Modalidades</div>
             <div style= {{marginBottom: 8}}>Equipo</div>
             <div style= {{marginBottom: 8}}>Experiencias</div>
      </Grid>
      <Grid item
          xs={3}
          sm={3}
          md={2}
          lg={2}
          xl={2} sx={{ fontSize: 10, color: "#FFF" }}>
             <div style= {{marginBottom: 8}}>LinkedIn</div>
        <div>Instagram</div>
      </Grid>
      <Grid item
          xs={4}
          sm={4}
          md={4}
          lg={2}
          xl={2}>
          <ArrowCircleUpIcon sx={{ fontSize: 60, color: "#FFF" }} />{" "}

      </Grid>
    </Grid>
  );
};

export default Footer;

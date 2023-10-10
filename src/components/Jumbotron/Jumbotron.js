import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Jumbotron.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid } from "@mui/material";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content">
        <Typography
          variant="h4"
          className="jumboFont"
          sx={{ color: "black !important", fontSize: '2' }}
        >
        
          <h3>Desata tu <br /> potencial interno</h3>
        </Typography>
        <Button className="jumboButton" variant="contained" color="primary">
          <Grid container> <WhatsAppIcon sx={{ paddingRight: "10px" }}></WhatsAppIcon> Reserva tu Sesión Ahora  <ArrowForwardIcon sx={{ paddingLeft: "5px", fontSize: "22px", fontWeight: "lighter" }}/> </Grid>

        </Button> 
      </div>
    </div>
  );
};

export default Jumbotron;

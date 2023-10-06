import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Jumbotron.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content">
        <Typography
          variant="h4"
          className="jumboFont"
          sx={{ color: "black !important", fontSize: '2' }}
        >
        
          <h1>Desata tu <br /> potencial interno</h1>
        </Typography>
        <Button className="jumboButton" variant="contained" color="primary">
          Reserva tu Sesión Ahora <div> <ArrowForwardIcon sx={{ fontSize: 14, top: '10' }}/> </div>

        </Button> 
      </div>
    </div>
  );
};

export default Jumbotron;

import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './Jumbotron.css'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
        <div className="jumbotron-content">
          <Typography variant="h4">Desata tu Potencial Interno</Typography>
          <Button variant="contained" color="primary">
            Reserva tu Sesión Ahora
          </Button>
        </div>
    </div>
  );
};

export default Jumbotron;

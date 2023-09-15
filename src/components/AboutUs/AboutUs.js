import React from 'react'
import './AboutUs.css'
import { Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="AboutUsBg general-padding"
      spacing={4}
      sx={{ paddingBottom: "150px", paddingTop: "150px", color: "white" }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='dark-blue m-0'>
        <h3 className='m-0'>Sobre nosotros</h3>
        <h2 className='m-0'>Conócenos mejor</h2>
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className='mision dark-blue'>
        <h2 className='m-0'>
          Psico Moviment
        </h2>
        Somos un equipo de profesionales que busca promover el desarrollo del rendimiento humano, con los mejores programas de acompañamiento psicológico, adaptada a cada persona, deportista y/o organizaciones
      </Grid>
    </Grid>
  );
};

export default AboutUs;



/*
const AboutUs = () => {
  return (
    <Grid
      container
      className="AboutUsBg general-padding"
      spacing={4}
      sx={{ paddingBottom: "100px", paddingTop: "100px", color: "white" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default AboutUs;

*/
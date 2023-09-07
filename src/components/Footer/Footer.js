import React from 'react'
import { Grid } from '@mui/material'
import './Footer.css'



const Footer = () => {
    return (
         <Grid container className="Footer" position="sticky" spacing={4}>
           <Grid item xs={2}>
             <p>LOGO</p>
           </Grid>
           <Grid item xs={4}>
             <p>Oficina General</p>
             <p>Gral. Holley 2326. Of 1305</p>
             <p>Providencia</p>
             <p>Santiago de Chile</p>
             <p></p>
             <p>+56 9 9330 1190</p>
             <p>Juan.fernandez@psicomoviment.cl</p>
           </Grid>
           <Grid item xs={2}>
             <p>Reserva tu sesión</p>
             <p>Sobre Nosotros</p>
             <p>Servicios</p>
             <p>Modalidades</p>
             <p>Equipo</p>
             <p>Experiencias</p>
           </Grid>
           <Grid item xs={2}>
             <p>LinkedIn</p>
             <p>Instagram</p>
           </Grid>
           <Grid item xs={2}>
           <p>Flecha</p>
           </Grid>
         </Grid>
  )
}

export default Footer
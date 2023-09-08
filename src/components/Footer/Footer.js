import React from 'react'
import { Grid } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Logo from '../../static/images/psicomovimentLogo.png'
import './Footer.css'



const Footer = () => {
    return (
         <Grid container className="Footer" spacing={4} sx={{ paddingLeft: "100px", paddingRight: "100px", paddingBottom: "100px", paddingTop: "100px", color: "white"  }}>
           <Grid item xs={2}>
           <img src={Logo} alt="psicomovimentLogo" width={115}/>
           </Grid>
           <Grid item xs={4}>
             <div style= {{fontWeight: 800 }}>Oficina Central</div>
             <div>Gral. Holley 2326. Of 1305</div>
             <div>Providencia</div>
             <div style= {{marginBottom: 30}} >Santiago de Chile</div>
             <div style= {{fontSize: 13}}>+56 9 9330 1190</div>
             <div style= {{fontSize: 13}}>Juan.fernandez@psicomoviment.cl</div>
           </Grid>
           <Grid item xs={2} sx={{ fontSize: 10 }}>
             <div>Reserva tu sesión</div>
             <div>Sobre Nosotros</div>
             <div>Servicios</div>
             <div>Modalidades</div>
             <div>Equipo</div>
             <div>Experiencias</div>
           </Grid>
           <Grid item xs={2} sx={{ fontSize: 10 }}>
             <div>LinkedIn</div>
             <div>Instagram</div>
           </Grid>
           <Grid item xs={2}>
           <div> <ArrowCircleUpIcon sx={{ fontSize: 60 }}/> </div>
           </Grid>
         </Grid>
  )
}

export default Footer
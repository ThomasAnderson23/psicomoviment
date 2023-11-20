import React from "react";
import { Grid } from "@mui/material";
import Logo from "../../static/images/psicomovimentLogo.png";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
        <div style={{ fontSize: 13 }}><a href= {`https://api.whatsapp.com/send?phone=${+56967351118}`}>+56 9 6723 1118 (Solo WhatsApp)</a></div>
        <div style={{ fontSize: 13 }}><a href="https://www.instagram.com/psico_moviment?igshid=OGQ5ZDc2ODk2ZA%3D%3D">@psico_moviment</a></div>
        <div style={{ fontSize: 13 }}>info@psicomoviment.cl</div>
      </Grid>
      <Grid item 
          xs={4}
          sm={4}
          md={2}
          lg={2}
          xl={2} sx={{ fontSize: 10, color: "#FFF" }}>
<div style= {{marginBottom: 8}}><a href="#jumbotron"> Haz tu Consulta</a> </div>
             <div style= {{marginBottom: 8}}><a href="#aboutus"> Sobre Nosotros</a> </div>
             <div style= {{marginBottom: 8}}><a href="#servicios"> Servicioss</a></div>
             <div style= {{marginBottom: 8}}><a href="#modalidades"> Modalidades</a> </div>
             <div style= {{marginBottom: 8}}><a href="#equipo"> Equipo</a> </div>
             <div style= {{marginBottom: 8}}><a href="#experiencias"> Experiencias</a> </div>
      </Grid>
      <Grid item
          xs={3}
          sm={3}
          md={2}
          lg={2}
          xl={2} sx={{ fontSize: 10, color: "#FFF" }}>

            
        <a href="https://www.instagram.com/psico_moviment?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <InstagramIcon
                sx={{
                  fontSize: "23px !important",
                }}/> </a>
        <a href= {`https://api.whatsapp.com/send?phone=${+56967351118}`}> <WhatsAppIcon
                sx={{
                  fontSize: "23px !important",
                  ml: "10px"
                }}/>  </a>
      </Grid>
   
    </Grid>
  );
};

export default Footer;

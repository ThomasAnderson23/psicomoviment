import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../static/images/psicomovimentLogo.png'
import './Header.css'

const pages = ['Reserva Tu Sesión', 'Sobre Nosotros', 'Servicios', 'Modalidades', 'Equipo', 'Experiencias'];


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ paddingLeft: "100px", paddingRight: "100px"  }}>
        <Toolbar>
        <img src={Logo} alt="psicomovimentLogo" width={100}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        {pages.map((page) => (
                <Button color="inherit" className='normalCase'>{page}</Button>
              ))}

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

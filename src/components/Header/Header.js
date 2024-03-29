import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../static/images/psicomovimentLogo.png";
import "./Header.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Haz tu Consulta", link: "#jumbotron" },
  { name: "Sobre Nosotros", link: "#aboutus" },
  { name: "Servicios", link: "#servicios" },
  { name: "Modalidades", link: "#modalidades" },
  { name: "Equipo", link: "#equipo" },
  { name: "Experiencias", link: "#experiencias" },
];

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar className="header-fix" position="fixed" component="nav">
        <Toolbar>
          <img src={Logo} alt="psicomovimentLogo" width={80} />
          <Typography
            variant="h6"
            component="div"
            className="headerFont"
            sx={{ flexGrow: 1 }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenu}
            sx={{ mr: 4, pr: 0, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#FFF", fontSize: "32pt" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {pages.map((page) => (
              <a href={page.link}>
                <MenuItem onClick={handleClose}>{page.name}</MenuItem>
              </a>
            ))}
          </Menu>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((page) => (
              <a href={page.link}>
                <Button
                  color="inherit"
                  className="normalCase"
                  sx={{ fontSize: "10pt" }}
                >
                  {page.name}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

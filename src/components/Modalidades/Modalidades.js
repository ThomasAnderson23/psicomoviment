import React from "react";
import "./Modalidades.css";
import { Grid } from "@mui/material";
import ModItem from "./Modalidad/ModItem";
import PresencialImg from "../../static/images/Iconos-modalidades/Vector.svg";
import OnlineImg from "../../static/images/Iconos-modalidades/online.png";
import HibridoImg from "../../static/images/Iconos-modalidades/hibrido.png";

const ModList = [
  {
    title: "Presencial",
    description:
      "Acompañamiento in situ, con un entrenamiento que refuerce tanto el desarrollo personal como profesional.",
    image: PresencialImg,
  },
  {
    title: "Online",
    description:
      "Maximizamos el uso de herramientas digitales, fomentamos la adaptación a nuevas estrategias digitales, ofrecemos capacitación continua y promovemos una cultura digital.",
    image: OnlineImg,
  },
  {
    title: "Híbrido",
    description:
      "Ofrecemos coaching en vivo y en línea, flexible para adaptarse a horarios de trabajo y la cultura corporativa. Nuestra variedad de métodos asegura la accesibilidad para todos los colaboradores, sin importar su ubicación o disponibilidad",
    image: HibridoImg,
  },
];

const Modalidades = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="general-padding"
      spacing={4}
      sx={{ paddingTop: "150px", height: "100%" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="dark-blue m-0 Mod"
      >
        <h3 className="m-0" >Modalidades</h3>
        <h2 className="m-0" fontWeight= "950"  >Estrategias a medida</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container>
          {ModList.map((s) => (
            <ModItem mod={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Modalidades;

import React from "react";
import "./Principles.css";
import { Grid } from "@mui/material";
import PrinItem from "./Principle/PrinItem";

const PrinList = [
  {
    title: "Presencial",
    description:
      "Acompañamiento in situ, con un entrenamiento que refuerce tanto el desarrollo personal como profesional.",
    image: null,
  },
  {
    title: "Online",
    description:
      "Maximizamos el uso de herramientas digitales, fomentamos la adaptación a nuevas estrategias digitales, ofrecemos capacitación continua y promovemos una cultura digital.",
    image: null,
  },
  {
    title: "Híbrido",
    description:
      "Ofrecemos coaching en vivo y en línea, flexible para adaptarse a horarios de trabajo y la cultura corporativa. Nuestra variedad de métodos asegura la accesibilidad para todos los colaboradores, sin importar su ubicación o disponibilidad",
    image: null,
  },
];
const Principles = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="general-padding"
      spacing={4}
      sx={{ paddingBottom: "150px", paddingTop: "150px", height: "100%" }}
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
        <h3 className="m-0">Modalidades</h3>
        <h2 className="m-0">Estrategias a medida</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container>
          {PrinList.map((s) => (
            <PrinItem prin={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Principles;

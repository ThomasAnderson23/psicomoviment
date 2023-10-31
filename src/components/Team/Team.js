import React from "react";
import "./Team.css";
import { Grid } from "@mui/material";
import ProItem from "./Professionals/ProItem";

const teamList = [
  {
    title: "Juan Fernández A.",
    position: "Psicólogo del Deporte",
    description:
      "Psicólogo del Deporte y de la Actividad Física, Universidad de Barcelona, España. Psicólogo en el Comité Olímpico de Chile. Docente de Post Grado y Consultor Organizacional.",
    backgroundImageClass: "juan1",
  },
  {
    title: "Maite Ramírez",
    position: "Psicóloga del Deporte",
    description:
      "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "maite",
  },
];

const Team = () => {
  return (
    <Grid
      id="equipo"
      container
      justifyContent={"center"}
      className="general-padding team-bg"
      spacing={4}
      sx={{
        paddingBottom: "10px",
        paddingTop: "100px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="m-0 dark-blue Mod"
        sx={{ mb: "20px" }}
      >
        <h3 className="m-0 whFont" style={{ color: "white !important" }}>
          Equipo
        </h3>
        <h2 className="m-0">Almas colaborativas </h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={2}>
          {teamList.map((s) => (
            <ProItem pro={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;

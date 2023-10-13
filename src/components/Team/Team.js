import React from "react";
import "./Team.css";
import { Grid } from "@mui/material";
import ProItem from "./Professionals/ProItem";

const teamList = [
  {
    title: "Juan Fernández A.",
    position: "Psicólogo Deportivo",
    description:
      "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "juan1",
  },
  {
    title: "Maite Ramírez",
    position: "Psicóloga Deportiva",
    description:
      "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "maite",
  },
  {
    title: "Juan Fernández A.",
    position: "Psicólogo Deportivo",
    description:
      "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "juan2",
  },
];

const Team = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="general-padding team-bg"
      spacing={4}
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
        <Grid container spacing={4}>
          {teamList.map((s) => (
            <ProItem pro={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;

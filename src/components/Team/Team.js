import React from "react";
import "./Team.css";
import { Grid } from "@mui/material";
import ProItem from "./Professionals/ProItem";

const teamList = [
  {
    title: "Juan Fernández A.",
    position: "Psicólogo Deportivo",
    description: "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "pro1",
  },
  {
    title: "Juan Fernández A.",
    position: "Psicólogo Deportivo",
    description: "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "pro2",
  },
  {
    title: "Juan Fernández A.",
    position: "Psicólogo Deportivo",
    description: "Soy psicólogo de la Universidad de Chile con estudios de especialización en psicoterapia humanista existencial, Gestalt y Focusing.",
    backgroundImageClass: "pro2",
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
        className="dark-blue m-0 Mod"
      >
        <h3 className="m-0">Equipo</h3>
        <h2 className="m-0" fontWeight="950">
          Almas colaborativas{" "}
        </h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container sx= {{ position: "relative"}} spacing={4}>
          {teamList.map((s) => (
            <ProItem pro={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;

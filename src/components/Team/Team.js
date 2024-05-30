import React from "react";
import "./Team.css";
import { Grid } from "@mui/material";
import ProItem from "./Professionals/ProItem";

const teamList = [
  { 
    title: "Benjamín Vergara Cristi",
    position: "Asesor Metodológico",
    description:
      "Profesor de Educación Física, UMCE. Entrenador de Natación con más de 20 años de Experiencia. Entrenador jefe Rama de Natación de Estadio Español de Las Conde hasta 2023. Docente y asesor técnico de natación.",
    backgroundImageClass: "benjamin", 
    },
  {
    title: "Juan Fernández A.",
    position: "CEO Fundador / Head Mental Coach",
    description:
      "Psicólogo del Deporte y de la Actividad Física, Universidad de Barcelona, España. Psicólogo en el Comité Olímpico de Chile. Docente de Post Grado y Consultor Organizacional.",
    backgroundImageClass: "juan1",
  }, 
  {
  title: "Dr. Matías Moreno",
  position: "Coordinador Evaluaciones y Neurociencias",
  description:
    "Médico especialista en Psiquiatría, más de diez años de experiencia clínica en Chile y el extranjero. Miembro del Área Médica del Comité Olímpico de Chile. Acompañamiento a deportistas de disciplinas como rugby, fútbol, tenis, equitación, hockey césped y golf.",
  backgroundImageClass: "matias", 
},
{
  title: "Maite Ramírez",
  position: "Área Capacitación y Desarrollo ",
  description:
    "Psicóloga especialista en el área Clínica Adulto e infanto juvenil; Procesos Deportivos y Psicodiagnostico. Asesorías Area Esucacional y Organizacional.",
  backgroundImageClass: "maite",
},
{
  title: "Domingo Zavala",
  position: "Trainee Program",
  description:
    " Psicólogo egresado de la Universidad Diego Portales, con experiencia en procesos comunitarios y deportivos con niños y adolescentes. Participación del equipo de Psicólogos Voluntarios en Juegos Panamericanos Santiago 2023.",
  backgroundImageClass: "domingo",
},
{   title: "Extra",
    position: "Definir",
    description:
      " Agregar descripción...",
    backgroundImageClass: "extra",
}
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
        <Grid container spacing={2} justifyContent="space-around">
          {teamList.map((s) => (
            <ProItem pro={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;

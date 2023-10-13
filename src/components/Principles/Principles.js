import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Grid } from "@mui/material";
import "./Principles.css";
import Car1 from "../../static/images/Profesionalismo.png";
import Car2 from "../../static/images/Lealtad.png";
import Car3 from "../../static/images/Trabajo-en-equipo.png";
import Car4 from "../../static/images/Disciplina.png";
import Car5 from "../../static/images/Tecnología.png";
import PrinItem from "./Principle/PrinItem";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PrinList = [
  {
    title: "1. Profesionalismo",
    description:
      "En Psico Moviment, el profesionalismo es la base de nuestro compromiso con los deportistas.  Valoramos la confidencialidad, la ética y la excelencia en cada paso de nuestro trabajo, asegurando que cada deportista confíe en nosotros en su búsqueda del éxito olímpico.",
    image: Car1,
  },
  {
    title: "2. Lealtad",
    description:
      "En Psico Moviment, nuestra lealtad hacia los deportistas es inquebrantarle. Nos comprometemos a apoyarte en cada paso hacia el éxito, honrando tu confianza en nosotros.",
    image: Car2,
  },
  {
    title: "3. Trabajo en equipo",
    description:
      "Valoramos y promovemos el trabajo en equipo como un pilar fundamental para el éxito deportivo. Facilitamos la colaboración entre deportistas, entrenadores y nuestro equipo de psicólogos para lograr metas compartidas y un rendimiento óptimo.",
    image: Car3,
  },
  {
    title: "4. Disciplina",
    description:
      "Promovemos y cultivamos la disciplina como un pilar fundamental en el camino hacia el éxito. Te ayudamos a desarrollar la autodisciplina necesaria para mantenerte enfocado en tus objetivos y superar desafíos en tu carrera deportiva.",
    image: Car4,
  },
  {
    title: "5. Tecnología",
    description:
      "Combinamos la psicología deportiva con tecnología de vanguardia para potenciar tu rendimiento como deportista olímpico. Nuestras soluciones tecnológicas avanzadas brindan análisis detallados y vengajas competitivas para impulsar tu éxito en el deporte.",
    image: Car5,
  },
];

const Principles = () => {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        className="general-padding"
        sx={{
          paddingBottom: "10px",
          paddingTop: "100px",
          mb: "100px",
          height: "100%",
        }}
        spacing={3}
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
          <h3 className="m-0">Principios</h3>
          <h2 className="m-0">La Esencia que Nos Define</h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Carousel
            show={1}
            slide={1}
            transition={0.3}
            rightArrow={
              <IconButton aria-label="forward" sx={{ color: "black" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            }
            leftArrow={
              <IconButton aria-label="backward" sx={{ color: "black" }}>
                <ArrowBackIosIcon />
              </IconButton>
            }
          >
            {PrinList.map((s) => (
              <PrinItem prin={s} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Principles;

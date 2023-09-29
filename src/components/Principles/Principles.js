import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import "./Principles.css";
import Car1 from "../../static/images/Profesionalismo.png";
import Car2 from "../../static/images/Lealtad.png";
import Car3 from "../../static/images/Trabajo-en-equipo.png";
import Car4 from "../../static/images/Disciplina.png";
import Car5 from "../../static/images/Tecnología.png";
import PrinItem from "./Principle/PrinItem";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    title: "5 Tecnología",
    description:
      "Combinamos la psicología deportiva con tecnología de vanguardia para potenciar tu rendimiento como deportista olímpico. Nuestras soluciones tecnológicas avanzadas brindan análisis detallados y vengajas competitivas para impulsar tu éxito en el deporte.",
    image: Car5,
  },
];

const Principles = () => {
  return (
    <div className="PrinCarousel">
      <Carousel
        show={1}
        slide={1}
        transition={0.5}
        rightArrow={
          <IconButton aria-label="forward">
            <ArrowForwardIosIcon />
          </IconButton>
        }
      >
        {PrinList.map((s) => (
          <PrinItem prin={s} />
        ))}
      </Carousel>
    </div>
  );
};

export default Principles;

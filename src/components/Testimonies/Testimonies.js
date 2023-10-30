import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Grid } from "@mui/material";
import "./Testimonies.css";
import TestItem from "./Testimony/TestItem";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BenjaminImg from "../../static/images/Benjamin.png";
import ArleyImg from "../../static/images/Arley.jpg"

const TestList = [
  {
    image: BenjaminImg,
    name: "Benjamín Vergara",
    title: "Entrenador de natación Estadio Español de Las Condes, 2016-2023",
    description:
      "Solicité la ayuda profesional de Juan Adolfo para fortalecer la relación con mis deportistas de natación en el Estadio Español en 2017. También buscamos su colaboración para mejorar su desarrollo deportivo. Juan Adolfo realizó una evaluación exhaustiva de nuestro trabajo y presentó un proyecto al cual nos sumamos. Trabajó de cerca con los diferentes grupos y logró que nuestros deportistas se entregaran de manera más constante y consciente en los entrenamientos. Además, me ayudó a establecer relaciones más sólidas con mis deportistas como entrenador. Su contribución fue fundamental para nuestro desarrollo deportivo debido a su enfoque cercano tanto a los deportistas como a los entrenadores.",
  },{
    image: ArleyImg,
    name: "Arley Méndez",
    title: "Levantador de Pesas Team Chile (Campeon Mundial de Halterofilia 2017)",
    description:
      "Llevo un tiempo trabajando un tiempo con Psicomoviment. Me siento muy feliz de trabajar con ellos, ya que la parte psicologica para los deportista de alto rendimiento es sumamente importante. Hay veces que vamos en picada y no podemos encontrar nuestro rumbo o dibujar un buen camino por donde avanzar, es ahí donde entra la psicología, dandome confianza en mi a pesar de las dificultades.",
  },
  
];

const Testimonies = () => {
  return (
      <Grid
        id="experiencias"
        container
        justifyContent={"center"}
        className="general-padding"
        spacing={4}
        sx={{ marginBottom: "-250px", paddingBottom: "10px",
        paddingTop: "100px", }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="dark-blue m-0"
        >
          <h3 className="m-0">Experiencia</h3>
          <h2 className="m-0">Testimonios</h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            mb: {
              xs: "360px",
              sm: "360px",
              md: "360px",
              lg: "360px",
              xl: "360px",
            },
          }}
        >
          <Carousel
            show={1}
            slide={1}
            transition={0}
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
            {TestList.map((s) => (
              <TestItem test={s} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
  );
};

export default Testimonies;

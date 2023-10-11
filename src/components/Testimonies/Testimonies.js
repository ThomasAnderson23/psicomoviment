import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Grid } from "@mui/material";
import "./Testimonies.css";
import TestItem from "./Testimony/TestItem";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TestList = [
  {
    description:
      " Solicité la ayuda profesional de Juan Adolfo para fortalecer la relación con mis deportistas de natación en el Estadio Español en 2017. También buscamos su colaboración para mejorar su desarrollo deportivo. Juan Adolfo realizó una evaluación exhaustiva de nuestro trabajo y presentó un proyecto al cual nos sumamos. Trabajó de cerca con los diferentes grupos y logró que nuestros deportistas se entregaran de manera más constante y consciente en los entrenamientos. Además, me ayudó a establecer relaciones más sólidas con mis deportistas como entrenador. Su contribución fue fundamental para nuestro desarrollo deportivo debido a su enfoque cercano tanto a los deportistas como a los entrenadores.",
  },
  {description:
    "alsfkj",
  
  }
];

const Testimonies = () => {
  return (
      <Grid
        container
        justifyContent={"center"}
        className="general-padding"
        sx={{ marginBottom: "-250px", paddingTop: "10px", height: "100%" }}
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
          className="dark-blue m-0 Mod"
        >
            <Carousel
              show={1}
              slide={1}
              transition={0}
              rightArrow={
                <IconButton
                  aria-label="forward"
                  id="flechaDerecha"
                  sx={{ color: "black", marginTop: "120px" }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              }
              leftArrow={
                <IconButton
                  aria-label="backward"
                  sx={{ color: "black", marginTop: "120px" }}
                >
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

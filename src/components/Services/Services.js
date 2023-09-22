import React from "react";
import "./Services.css";
import { Grid } from "@mui/material";
import ServiceImage0 from "../../static/images/Service-0.png";
import ServiceImage1 from "../../static/images/Service-1.png";
import ServiceImage2 from "../../static/images/Service-2.png";
import ServiceItem from "./Service/ServiceItem";

const servicesList = [
  {
    title: "Personal",
    description:
      "Encuentra apoyo emocional con nuestro coaching personal. Ayudamos a fortalecer tu bienestar mental y emocional.",
    image: ServiceImage0,
  },
  {
    title: "Deportistas",
    description:
      "Fomentar la evolución desde la motivación inicial hasta el compromiso con objetivos personales implica un sólido Plan de Acción, respaldado por visualizaciones y afirmaciones.",
    image: ServiceImage1,
  },
  {
    title: "Organizacional",
    description:
      "Nuestro servicio de coaching se enfoca en el equipo humano de tu organización, buscando mejorar la eficacia de los resultados y aumentar la motivación y satisfacción de los empleados.",
    image: ServiceImage2,
  },
  /*{
    title: "Otro",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: ServiceImage0,
  },*/
];

const Services = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="services-bg general-padding"
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
        className="dark-blue m-0"
      >
        <h3 className="m-0 color-white">Servicios</h3>
        <h2 className="m-0">Soluciones a tu medida</h2>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="dark-blue m-0 card-container"
      >
        {servicesList.map((s) => (
          <ServiceItem service={s} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;

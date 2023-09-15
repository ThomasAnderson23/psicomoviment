import React from "react";
import "./Services.css";
import { Grid } from "@mui/material";
import ServiceImage0 from "../../static/images/Service-0.png";
import ServiceItem from "./Service/ServiceItem";

const servicesList = [
  {
    title: "Personal",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: ServiceImage0,
  },
  {
    title: "Deportistas",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: ServiceImage0,
  },
  {
    title: "Organizacional",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: ServiceImage0,
  },
  {
    title: "Otro",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: ServiceImage0,
  },
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

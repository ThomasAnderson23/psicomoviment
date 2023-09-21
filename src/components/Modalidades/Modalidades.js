import React from "react";
import "./Modalidades.css";
import { Grid } from "@mui/material";
import ModItem from "./Modalidad/ModItem";
import PresencialImg from "../../static/images/Iconos-modalidades/Vector.svg";
import OnlineImg from "../../static/images/Iconos-modalidades/online.png";
import HibridoImg from "../../static/images/Iconos-modalidades/hibrido.png";

const modList = [
  {
    title: "Presencial",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: PresencialImg,
  },
  {
    title: "Online",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: OnlineImg,
  },
  {
    title: "Híbrido",
    description:
      "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: HibridoImg,
  },
];

const Modalidades = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      className="general-padding"
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
        className="dark-blue m-0 Mod"
      >
        <h3 className="m-0">Modalidades</h3>
        <h2 className="m-0">Estrategias a medida</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container>
          {modList.map((s) => (
            <ModItem mod={s} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Modalidades;

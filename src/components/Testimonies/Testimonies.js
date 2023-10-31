import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Grid } from "@mui/material";
import "./Testimonies.css";
import TestItem from "./Testimony/TestItem";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BenjaminImg from "../../static/images/Benjamin.jpg";
import ArleyImg from "../../static/images/Arley.jpg";
import DanielImg from "../../static/images/Daniel.jpg";
import JudithImg from "../../static/images/Judith.jpg";
import YutakaImg from "../../static/images/Yutaka.jpg";


const TestList = [
  {
    image: ArleyImg,
    name: "Arley Méndez",
    title:
      "Levantador de Pesas Team Chile (Campeon Mundial de Halterofilia 2017)",
    description:
      "Llevo un tiempo trabajando un tiempo con Psicomoviment. Me siento muy feliz de trabajar con ellos, ya que la parte psicologica para los deportista de alto rendimiento es sumamente importante. Hay veces que vamos en picada y no podemos encontrar nuestro rumbo o dibujar un buen camino por donde avanzar, es ahí donde entra la psicología, dandome confianza en mi a pesar de las dificultades.",
  },
  {
    image: BenjaminImg,
    name: "Benjamín Vergara",
    title: "Entrenador de natación Estadio Español de Las Condes, 2016-2023",
    description:
      "Solicité la ayuda profesional de Juan Adolfo para fortalecer la relación con mis deportistas de natación en el Estadio Español en 2017. También buscamos su colaboración para mejorar su desarrollo deportivo. Juan Adolfo realizó una evaluación exhaustiva de nuestro trabajo y presentó un proyecto al cual nos sumamos. Trabajó de cerca con los diferentes grupos y logró que nuestros deportistas se entregaran de manera más constante y consciente en los entrenamientos. Además, me ayudó a establecer relaciones más sólidas con mis deportistas como entrenador. Su contribución fue fundamental para nuestro desarrollo deportivo debido a su enfoque cercano tanto a los deportistas como a los entrenadores.",
  },
  {
    image: DanielImg,
    name: "Daniel Cabré",
    title: "Regatista, Real Federación Española de Vela (Vicecampeón del mundo Clase Europa 2022)",
    description:
      "La experiencia que he tenido con Psicomoviment es increíble, me he sentido querido y apoyado siempre, en los momentos buenos pero sobre todo en los momentos malos. Se nota que esto lo hace por pasión ya que le pone un trabajo y unas ganas impresionantes, todo para que el proceso sea lo mejor posible. Gracias al trabajo hecho, pude rendir en una situación muy complicada a nivel personal que creo que sin su ayuda no lo habría conseguido. Desde que le conocí noté unas ganas por ayudar increíble, con solo un par de semanas de conocerme tanto a mí como al deporte supo cómo ayudar, esto es sorprendente porque al conocernos no había vivido nunca una regata pero le puso todo el esfuerzo para entender cómo funcionaba y cómo podríamos aumentar el rendimiento al máximo.",
  },
  {
    image: JudithImg,
    name: "Judith Morales Escobar",
    title: "Seleccionada Chilena de Tenis de Mesa",
    description:
      "Son más de 5 años los que llevamos trabajando juntos y ha sido clave para mi carrera deportiva, siempre que nos colocamos metas, las cumplimos. Una de las metas más relevantes fue que me ayudó a compatibilizar una carrera universitaria con el deporte de alto rendimiento, entregando herramientas para sobrellevar problemas personales y académicos. En el ámbito deportivo me ayudó a visualizar el cierre de partidos, que en mi disciplina es importantísimo saber manejar este tipo de situaciones para lograr buenos resultados.",
  },
  {
    image: YutakaImg,
    name: "Yutaka Matsubara",
    title: "Seleccionado Universitario en Japón",
    description:
"Me ayudó mucho desde mi etapa juvenil hasta mi adultez. Dentro de las habilidades que trabajamos fueron: el cierre de los partidos, como superar momentos de tensión, mantenerme en armonía con mis emociones, prepararme para partidos importantes. Cosas que me ayudaron como deportista pero también como persona."  },
];

const Testimonies = () => {
  return (
    <Grid
      id="experiencias"
      container
      justifyContent={"center"}
      className="general-padding"
      spacing={4}
      sx={{
        marginBottom: "-250px",
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

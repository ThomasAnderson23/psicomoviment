import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Jumbotron.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Jumbotron = () => {
  return (
    <div
      id="jumbotron"
      className="jumbotron"
      sx={{ position: "relative", height: {lg: "10vh"} }}
    >
      <div className="jumbotron-content">
        <Typography
          variant="h4"
          className="jumboFont"
          sx={{
            height: "60%",
            color: "black !important",
            fontSize: {
              xs: "14px",
              sm: "20px",
              md: "20px!important",
              lg: "40px!important",
              xl: "40px!important",
            },
            pt: { xs: "40px", sm: "40px", md: "25px", lg: "0px", xl: "0px" },
          }}
        >
          <h3 className="jumboFont">
            Acompañando tus ideas para lograr una mejor versión en tu organización
          </h3>
        </Typography>
        <a
          href={`https://api.whatsapp.com/send?phone=${+56967351118}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            startIcon={
              <WhatsAppIcon
                sx={{
                  fontSize: "28px !important",
                }}
              />
            }
            endIcon={
              <ArrowForwardIcon
                sx={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              />
            }
            className="jumboButton"
            variant="contained"
            color="primary"
          >
            Haz tu consulta aquí{" "}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;

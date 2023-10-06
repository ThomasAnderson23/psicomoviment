import React, { useState } from "react";
import "./ProItem.css";
import { Grid } from "@mui/material";

const ProItem = ({ pro }) => {
  const { backgroundImageClass, title, position, description } = pro;

  const [mouse, setMouse] = useState(false);

  return (
    <Grid item xs={12} sm={4} md={4} lg={4} xl={6} sx={{ textAlign: "center" }}>
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ marginBottom: "150px" }}
        >
          <div
            className={`proContainer ${backgroundImageClass}`}
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            style={{ height: "480px" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ position: "absolute", bottom: "30px", color: "white",  textAlign: "left",
              paddingLeft: "10px", }}
            >
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "250px"
                
                }}
              >
                {title}
              </h4>
              <h6
                style={{
                  fontWeight: "lighter",
                  fontSize: "15px",
                  fontStyle: "italic",
                  marginBottom: "10px"
                }}
              >
                {position}{" "}
              </h6>{" "}
              <br />
              {mouse && description}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProItem;

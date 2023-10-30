import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({service}) => {
  const {title, description, image} = service;
  return (
    <Card sx={{ maxWidth: 310, maxHeight: 450 }} className='service-card'>
      <CardActionArea className="horiCards">
        <CardMedia
          component="img"
          height="275"
          image={image}
          alt="services" 
                />
        <CardContent sx={{padding: "1.2rem", height: "400px"}} className='font-poppins'>
          <h7 className='m-0'>  
            {title}
          </h7>
          <Typography variant="body2" color="text.secondary" className='font-poppins2'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceItem;

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({service}) => {
  const {title, description, image} = service;
  return (
    <Card sx={{ maxWidth: 330, maxHeight: 450 }} className='service-card'>
      <CardActionArea className="horiCards">
        <CardMedia
          component="img"
          height="275"
          image={image}
          alt="services" 
                />
        <CardContent sx={{padding: "1.2rem"}} className='font-poppins'>
          <h3 className='m-0'>
            {title}
          </h3>
          <Typography variant="body2" color="text.secondary" className='font-poppins2'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceItem;

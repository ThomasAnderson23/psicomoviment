import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({service}) => {
  const {title, description, image} = service;
  return (
    <Card sx={{ maxWidth: 345 }} className='service-card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{padding: "1.2rem"}} className='font-poppins'>
          <h3 className='m-0'>
            {title}
          </h3>
          <Typography variant="body2" color="text.secondary" className='font-poppins'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceItem;

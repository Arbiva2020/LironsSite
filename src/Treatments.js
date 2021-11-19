import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Treatments.css";
import Clinic1 from "./images/Clinic1.jpeg";
import Tips from "./data/data";
// import "./data.js";

function Treatments() {
    return (
        <div style={{marginBottom: "10rem"}}>
            <div style={{margin:"5rem"}}>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Clinic1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Tips[0].description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Tips[0].fullDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          קרא/י עוד
        </Button>
      </CardActions>
    </Card>

    </div>
        </div>
    )
}

export default Treatments

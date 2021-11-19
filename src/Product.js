import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Product.css";
import "./data/productData";
import Products from "./data/productData";
import herbs1 from "./images/herbs1.jpg";
import roll from "./images/roll.jpeg";


function Product({src, name, productDescription, price, ...props}) {


    return (
        <div>
            <div className="product__card" style={{display:"flex", justifyContent:"center", marginBottom:"3rem"}}>
      {Products.map((product)=> (      
    <Card sx={{ maxWidth: 345 }} style={{borderStyle:"solid", borderColor:"rgb(41, 33, 33)", borderWidth:"0.1rem", margin: "2rem"}}>
        
      <CardMedia
        component="img"
        height="140"
        image={product.src}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.productDescription}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small">הוסף לסל</Button>
        <Button size="small">קרא עוד</Button>
      </CardActions>
     
    </Card>
 ))}
 </div>
        </div>
    )
}

export default Product

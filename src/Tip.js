import React, { useState, useEffect } from "react";
import treatments from "./data/data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Tips from "./data/data";
import "./Tip.css";

console.log(Tips);

function Tip({ id, catagory, data }) {
  const today = new Date();
  const [tip, setGetTip] = useState();
  const [todaysDate, setTodaysdate] = useState();

  let getTips = (e) => {
    const len = treatments.length;
    setGetTip(Math.floor(Math.random({ data }) * len));
  };

  useEffect(() => {
    //every time the date changes (00:00:00), we re-render the app and get a random treatments.tip{value}
    // fetch ('http://localhost:3000/Tips')
    // .then(res => {
    //     return res.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     setGetTip(data);
    // })
  }, []);
  return (
    <div>
      <Card
        sx={{ maxWidth: 600 }}
        style={{ marginTop: "50px", marginBottom: "50px", width: "50rem"}}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", fontFamily:"Amatic SC"}}>
              {Tips[0].tip}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Tip;

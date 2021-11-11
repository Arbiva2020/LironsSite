import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import instagram from "./images/instagram.svg";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
//import { CardActionArea } from "@mui/material";
import Tip from "./Tip";
import treatments from "./data/data";

function Home() {
  const [pictures, setPictures] = useState(0);
  const picturesLength = pictures.length;

  useEffect(() => {
    const getPicturesData = async () => {
      await fetch(
        "https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=EAAOdErILrvMBAD2aGPZCPo1ens8LBC5en90MdRMIuAcFSo3Abhannhvicb6pAarG1ZCZCY6pgAILkP97ZCSa3jKZAas6lZAdcy4GKzdGa0ChDJeEajCYWFP03GSZB8aLGhMbMOFFM4cwDn3aISRc6j9IWYaSJFn3oOyngoWQ1MUVAfC7ZCDZAIxZAHSOwF7wNar5lJOGDx4NVnE1PtWPiEktYDrAn5FWoN0H2QigmzWX7xl4znkvsu6MaZAjnqC4ip9on0ZD"
      )
        .then((response) => response.json()) //we accsess the json containing all data
        .then((data) => {
          //we acsess only specific data and map it: here we need only pictures to map in the div
          //const pictures = data.map((data) => ({
          // id: USER-ID,
          // name: EXAMPLE NAME,
          // email: EXAMPLE@EMAIL.COM,
          // picture: {
          //   data: {
          //     height: 50,
          //     is_silhouette: false,
          //     url: URL-FOR-USER-PROFILE-PICTURE,
          //     width: 50
          //   }
          // }
          // }));
          // setMapCountries(data); //i need all information
          setPictures(pictures);
        });
    };
    //after setting, we are getting:
    getPicturesData();
  }, []);

  return (
    <div className="home">
      <div className="home__title">
        <h1 className="home__h1">ברוכים הבאים לאבן דרך</h1>
        <h2 className="home__h2">המקום בו גוף ונפש נפגשים</h2>
      </div>
      <div className="home__text">
        <span style={{direction:"rtl", padding:"2rem", marginRight: "2rem"}}>
          נעים מאוד, אני לירון ארביב מטפלת ברפואה סינית עתיקה
          <br />
          את לימודי סיימתי בשנת 2018 בקמפוס "ברושים" שבאוניברסיטת תל אביב, אחת
          המכללות המובילות בתחום בארץ.
          <br />
          בנוסף עברתי הכשרה בטיפולים אסתטיים קוסמטיים ברפואה סינית אצל המטפלת
          הידועה זהר ברק אור.
          <br />
          בחרתי ללמוד ולהתמקצע ברפואה סינית כיוון שגיליתי והתחברתי לדרך הטיפולית
          שבוחרת להביט על האדם כשלם - הנפש והגוף הם אחד - ולכן הטיפול
          מתייחס לכלל הרבדים הקיימים בגוף האדם, כלומר: טיפול דרך מגע, תזונה, נפש
          ותנועה.
          <br />
          הכלים שבאמצעותם אני מטפלת הם מגוונים:
          <br />
          דיקור סיני, צמחי מרפא סיניים, התאמת תפריט תזונה, עיסוי שיאצו רפואי,
          פעילות גופנית ותנועה- צ'י קונג.
          <br />
          כל טיפול מותאם אישית על פי אורח חיים והרגלים של המטופל ולכן מתבצעת על
          ידי אבחנה מדויקת לפני תחילת הטיפולים.
        </span>
      </div>

      <div>
        <span className="home__treatments">
          <Link to="/treatments">לרשימת הטיפולים המלאה</Link>
        </span>
      </div>
      <div>
        <div className="home__instagram">
          <img src={instagram} style={{ height: "20%", width: "20%" }} />
        </div>
        {/* <div>{pictures.map((picture) => (<img src={picture.url}/>))}</div> */}
      </div>
      <div className="home__tip" style={{ marginBottom: "100px"}}>
        <div className="hometip__headline">
        <h3>הטיפ היומי</h3>
        </div>
        <div>
          <Tip tip={treatments.tip}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

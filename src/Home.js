import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import instagram from "./images/instagram.svg";
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
        <h2 className="home__h2" style={{ marginTop: "2rem" }}>
          המקום בו גוף ונפש נפגשים
        </h2>
      </div>
      <div className="home__text">
        <span
          style={{ direction: "rtl", padding: "2rem", marginRight: "2rem" }}
        >
          <span
            style={{
              color: "rgb(111, 160, 140)",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            איזה כיף שאתם כאן!
          </span>
          <br />
          ראשית אני רוצה להודות לכם שפתחתם את ראשכם ולבכם לשיטת טיפול עתיקה
          וייחודית בת 2500 שנה:
          <br />
          דיקור זהו כרטיס כניסה להביט על הגוף ועל החיים עצמם.
          <br />
          כמה דברים שכדאי להכיר לפני שמתחילים טיפול:
          <br />
          - לאכול ארוחה קלה כשעה לפני שמתחילים
          <br />
          - להגיע עם בגדים נוחים (טרנינג רחב הכי טוב)
          <br />
          - להביא תוצאות בדיקות הנוגעות לבעיה שבגללה הגעת לטיפול: בדיקות דם/
          רנטגן/ סיכומי ניתוח/ אבחנה מרופא וכו'
          <br />
          <h3
            style={{
              color: "rgb(111, 160, 140)",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            למה לצפות במהלך הטיפול?
          </h3>
          בפגישה הראשונה מתבצע תשאול מקיף על ההרגלים היומיומיים שלך ועל אורח
          חייך: תזונה, פעילות גופנית, היסטוריה רפואית ועוד. 
          <br />
          לאחר התשאול מתחיל
          הטיפול (טיפול ראשון נמשך כשעתיים) - במהלכו נשתמש במגוון טכניקות טיפול
          מהרפואה הסינית, 
          <br />
          כל זאת כמובן בהתאם לאבחנה שנקבעה: דיקור/ עיסוי/ כוסות
          רוח/ צמחי מרפא/ גוואשה/ מוקסה/ הקזה/ המלצות תזונה.
          <br /> 
          <h3
            style={{
              color: "rgb(111, 160, 140)",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            למה לצפות לאחר הטיפול?
          </h3>
          לרוב אנשים מרגישים רגועים, מאוזנים וממוקדים למשך יום הטיפול
          ולעיתים כמה ימים אחריו. 
          <br />
          יש אפשרות שהסימפטומים יחריפו, ולאחר מכן תגיע הטבה
          ורגיעה. 
          <br />
          תיתכן קצת עייפות לאחר הטיפול.
          <br />
          יתכן שאיכות השינה תשתפר. 
          <br />
          יתכנו שיפורים נוספים במערכות גוף נוספות שיתחילו להתאים את עצמן למצב
          החדש כמו: מע' עיכול, מצב רוח, מע' רבייה וכו'. 
          <br />
          בתום הטיפול יינתנו
          המלצות המותאמות לך אישית להמשך הדרך, אותן חשוב ליישם בין הטיפולים.
          <br />
          אחוזי הצלחת הטיפול תלויים גם בך! שיתוף פעולה מלא יביא לתוצאות טובות
          יותר.
          <br />
          <h2
            style={{
              color: "rgb(111, 160, 140)",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            מחכה לראותכם!
          </h2>
        </span>
      </div>
      <div></div>
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
      <div className="home__tip" style={{ marginBottom: "100px" }}>
        <div className="hometip__headline">
          <h3>הטיפ היומי</h3>
        </div>
        <div>
          <Tip tip={treatments.tip} />
        </div>
      </div>
    </div>
  );
}

export default Home;

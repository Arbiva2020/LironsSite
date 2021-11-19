import React from "react";
import liron from "././images/liron.jpeg";
import lironBefore from "././images/lironBefore.jpeg";
import lironAfter from "././images/lironAfter.jpeg";
import "./Liron.css";

function Liron() {
  return (
    <div className="liron">
      <div className="Liron__details">
      <div className="liron__top">
        <div className="liron__text">
          <div className="liron__headline">
          </div>
          <div className="liron__description">
           <span style={{marginBottom: "5rem", color:"rgb(111, 160, 140)", fontSize:"2rem", fontWeight:"bold"}}>
          נעים מאוד, אני לירון
          </span> 
          <span style={{padding:"2rem", marginRight: "2rem", fontFamily: 'serif', fontSize:"130%"}}>
          <br />
          מטפלת ברפואה סינית עתיקה.
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
        </div>
      </div>
      <div className="liron__photo">
        <img className="liron__liron" src={liron} />
      </div>
      </div>
      <div className="liron__bottom">
        <div className="liron__bottomTitle">
          <h3 id="headline_bottom" style={{marginRight: "4rem", color:"rgb(111, 160, 140)", fontSize:"2rem", fontWeight:"bold"}}>המומלצים שלי</h3>
        </div>
        <div className="liron__recomends" style={{ fontFamily: 'serif', fontSize:"130%"}}>
          <p>
            .אני סומכת על כישוריי המקצועיים וכמובן על החומרים בהם אני משתמשת
          </p>
          <p>:לכן, לא היססתי ליישם על עצמי בדיוק את מה שאני מציעה לכם</p>
        </div>
        <div className="liron__images">
          <div className="img__container">
            <img className="liron__image" src={lironBefore} />
            <div className="topRightTitle">לפני</div>
          </div>
          <div className="img__container">
            <img className="liron__image" src={lironAfter} />
            <div className="topRightTitle">אחרי</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liron;

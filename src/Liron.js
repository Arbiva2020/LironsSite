import React from "react";
import liron from "././images/liron.jpeg";
import lironBefore from "././images/lironBefore.jpeg";
import lironAfter from "././images/lironAfter.jpeg";
import "./Liron.css";

function Liron() {
  return (
    <div className="liron">
      <div className="liron__top">
        <div className="liron__text">
          <div className="liron__headline">
            <h2>נעים מאוד, אני לירון</h2>
          </div>
          <div className="liron__description">
            <p>מטפלת ב.... בעלת הכשרה מ.... כבר איקס שנים</p>
          </div>
        </div>
        <div className="liron__photo">
          <img className="liron__liron" src={liron} />
        </div>
      </div>
      <div className="liron__bottom">
        <div className="liron__bottomTitle">
          <h3 id="headline_bottom">המומלצים שלי</h3>
        </div>
        <div className="liron__recomends">
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

import React from "react";
import "./ContactUs.css";
import "leaflet/dist/leaflet.css";
//import Map from "./Map";

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUs__details">
        <div className="contactUs__headline">
          <h1>:לייעוץ וקביעת תורים, ניתן לפנות</h1>
        </div>
        <div className="contactUs__location">
          <div className="contactUs__adress">
            <h3>:כתובתנו</h3>
          </div>
          <div className="contactUs__map"></div>
        </div>
        <div className="contactUs__phoneMail">
          <div id="mail">
            <h3>:מייל</h3>
          </div>
          <div id="phone">
            <h3>:טלפון</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

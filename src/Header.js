import React, { useState } from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import evenderech from "././images/evenderech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import treatments from "./data/data";


function Header() {

const [value, setValue] = useState(null);

  return (
    <div className="header__total">
       <div className="header__top">
        <h3>Liron Arbiv</h3></div>
    <div className="header">
      {/* <div className="header__bottom"> */}
      <div className="header__even">
        <Link to="/">
          {" "}
          <img className="header__logo" src={evenderech} />
        </Link>
      </div>
      <div className="header__menue" style={{ fontFamily: "sans-serif" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <div className="header__link">
            <span
              style={{
                display: "flex",
                justifyContent: "right",
                width: "90px",
              }}
            >
              דף הבית
            </span>
          </div>
        </Link>

        <Link
          to="/liron"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <div className="header__link">
            <span
              style={{
                display: "flex",
                justifyContent: "right",
                width: "90px",
              }}
            >
              אודותיי
            </span>
          </div>
        </Link>

        <Link
          to="/blogsList"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <div className="header__link">
            <span
              style={{
                display: "flex",
                justifyContent: "right",
                width: "90px",
              }}
            >
              בלוג
            </span>
          </div>
        </Link>

        <div className="header__link">
          
<Dropdown options={treatments} prompt="טיפולים" value={value} onChange={val => setValue(val)}/>
        </div>
        <Link
          to="/reviews"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <div className="header__link">
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                width: "120px",
                marginLeft: "60px",
                width: "100%",
              }}
            >
              מדיה
            </span>
          </div>
        </Link>
        <Link
          to="/ContactUs"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <div
            className="header__link"
            style={{
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "stretch",
                width: "100px",
              }}
            >
              צור קשר{" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  marginLeft: "5px",
                  display: "flex",
                  fontSize: "20px",
                  color: "rgb(240, 230, 239)",
                  marginTop: "0.5vh",
                }}
              />
            </span>
          </div>
        </Link>
      </div>
      </div>
   </div>
  );
}

export default Header;

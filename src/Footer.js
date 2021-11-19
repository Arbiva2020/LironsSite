import React, {useState} from "react";
import "./Footer.css"
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "./Dropdown";
import treatments from "./data/data";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  const [value, setValue] = useState(null);
  
  return (
    <div className="footer">
      
      <div className="footer__bar">
        <Nav className="mr-auto">
          <Nav.Link href="" style={{ fontSize: "25px", color:" rgb(41, 33, 33)", marginLeft:"50px", marginRight:"50px" }}>
            <FontAwesomeIcon icon={faFacebook} />
          </Nav.Link>
          <Nav.Link href="" style={{ fontSize: "25px", color:" rgb(41, 33, 33)", marginLeft:"50px", marginRight:"50px" }}>
            <FontAwesomeIcon icon={faInstagram} />
          </Nav.Link>
          <Nav.Link href="" style={{ fontSize: "25px", color:" rgb(41, 33, 33)", marginLeft:"50px", marginRight:"50px" }}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </Nav.Link>  
        </Nav>
        
        <div className="footer__search">
        <button type="button" id="footerButt">חיפוש</button>
<input type="text"></input>
      </div>
      {/* <div className="selected__value"></div>
      <Dropdown options={treatments} prompt="טיפולים" value={value} onChange={val => setValue(val)}/> */}
      <div>
        <p id="rights">כל הזכויות שמורות © {currentYear} </p>
        </div>
      </div>

    </div>
  );
}

export default Footer;

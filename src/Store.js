import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Product from "./Product";
import Dropdown from "./Dropdown";
import treatments from "./data/data";
import productCategory from "./data/data";
import price from "./data/productData";
import "./Store.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Store({image, name, productDescription, price, ...props}) {

    const [value, setValue] = useState(null);

  return (
    <div>
      <div className="store__buttons">
      <Dropdown  options={productCategory} prompt={"סנן" } value={value} onChange={val => setValue(val)} > <FilterAltIcon></FilterAltIcon> </Dropdown> 
      <Dropdown  options={productCategory} prompt={"מיין" } value={value} onChange={val => setValue(val)} > <FilterAltIcon></FilterAltIcon> </Dropdown>  
        {/* <button>
          {" "}
          <FontAwesomeIcon icon={faSort} /> מיין
        </button> */}
      </div>
      <Product style={{display:"flex", justifyContent:"center", marginBottom:"3rem", margin: "2rem"}}/>
      <div className="store__toCheckOutPage">
      <Link to="/checkOutPage"  style={{textDecoration: 'none'}}><button id="checkoutButton">מעבר לתשלום</button></Link>
      </div>
      <div style={{height:"7rem"}}></div>
      
    </div>
  );
}

export default Store;

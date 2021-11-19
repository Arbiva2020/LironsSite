import React, { useState } from "react";
import Products from "./data/productData";
import "./DropdownFilter.css";

function DropdownFilter({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="dropdownFilter">
      <div className="controlFilter" onClick={() => setOpen((prev) => !prev)}>
        <div
          className="selected-value-filter"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {prompt}
        </div>
        <div
          className="arrowFilter"
          className={`arrowFilter ${open ? "open" : null}`}
        ></div>
      </div>
      <div className="optionsFilter" className={`optionsFilter ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            className="optionFilter"
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >  
            {option.productCatagory}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownFilter;

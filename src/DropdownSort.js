import React, { useState } from "react";
import Products from "./data/productData";
import "./DropdownSort.css";
import "./data/sortingOptions";

function DropdownSort({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="dropdownSort">
      <div className="controlSort" onClick={() => setOpen((prev) => !prev)}>
        <div
          className="selected-value-sort"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {prompt}
        </div>
        <div
          className="arrowSort"
          className={`arrowSort ${open ? "open" : null}`}
        ></div>
      </div>
      <div className="optionsSort" className={`optionsSort ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            className="optionSort"
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >  
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownSort;

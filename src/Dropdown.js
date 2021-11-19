import React, { useState } from "react";
import treatments from "./data/data";
import "./Dropdown.css";

function Dropdown({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div
          className="selected-value"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {prompt}
        </div>
        <div
          className="arrow"
          className={`arrow ${open ? "open" : null}`}
        ></div>
      </div>
      <div className="options" className={`options ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            className="option"
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >  
            {option.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";
import RadioIcon from "./RadioIcon";

const Output = ({ finalOutput }) => {
  return (
    <div className="output-wrapper">
      <div>
        <h6 className="output-pill">Final Output y</h6>
        <div className="output-container">
          <div className="output-radioicon-wrapper">
            <RadioIcon />
          </div>
          <div className="output-txt">{finalOutput}</div>
        </div>
      </div>
    </div>
  );
};

export default Output;

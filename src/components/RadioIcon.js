import React from "react";

const RadioIcon = ({ content }) => {
  return (
    <div>
      <input
        type="radio"
        id="input"
        name="input"
        value="input"
        className="hidden peer"
        checked
      />
      <label htmlFor="input" className="radio-icon-wrapper">
        <span className="radio-icon-sub-wrap ">
          <span className="radio-icon-blue-dot"></span>
        </span>
        {content && <span className="gray-mid">{content}</span>}
      </label>
    </div>
  );
};

export default RadioIcon;

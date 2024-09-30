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
      <label htmlFor="input" className="flex items-center space-x-2 ">
        <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-sky-600">
          <span
            className={`w-2 h-2 ${"bg-sky-600"}  rounded-full peer-checked:block`}></span>
        </span>
        {content && <span className="text-gray-500">{content}</span>}
      </label>
    </div>
  );
};

export default RadioIcon;

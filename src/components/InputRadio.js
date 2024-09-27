import React, { useState } from "react";

const InputRadio = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="my-2 mx-1 flex justify-between text-gray-500">
      <div>
        <input
          type="radio"
          id="input"
          name="input"
          value="input"
          className="hidden peer"
          checked
        />
        <label
          htmlFor="input"
          className="flex items-center space-x-2 cursor-pointer">
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-sky-600">
            <span
              className={`w-2 h-2 ${
                selected ? "bg-sky-600" : "bg-white"
              }  rounded-full peer-checked:block`}></span>
          </span>
          <span className="text-gray-500">input</span>
        </label>
      </div>
      <div>
        <label
          htmlFor="input"
          className="flex items-center space-x-2 cursor-pointer">
          <span className="text-gray-500">output</span>
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-sky-600">
            <span
              className={`w-2 h-2 ${
                selected ? "bg-sky-600" : "bg-white"
              }  rounded-full peer-checked:block`}></span>
          </span>
        </label>
        <input
          type="radio"
          id="input"
          name="input"
          value="input"
          className="hidden peer"
          checked
        />
      </div>
    </div>
  );
};

export default InputRadio;

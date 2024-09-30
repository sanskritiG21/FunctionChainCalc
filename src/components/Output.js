import React from "react";
import RadioIcon from "./RadioIcon";

const Output = ({ finalOutput }) => {
  return (
    <div className="flex align-end items-center w-64 ">
      <div>
        <h6 className="bg-[#4caf7a]  text-white rounded-full text-center mb-1 px-2 py-0.5">
          Final Output y
        </h6>
        <div className="p-2 py-2 flex rounded-2xl w-[100%]  drop-shadow-xl border-[#4caf7a] border-2 bg-white">
          <div className="flex align-middle items-center px-2">
            <RadioIcon />
          </div>
          <div className="border-l-2 overflow-hidden w-24 ">{finalOutput}</div>
        </div>
      </div>
    </div>
  );
};

export default Output;

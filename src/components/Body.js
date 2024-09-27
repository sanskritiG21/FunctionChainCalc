import React from "react";
import FunctionCard from "./FunctionCard";
import Output from "./Output";

const Body = () => {
  const handleInputValue = (e) => {};
  return (
    <div className="m-4 mx-10 p-4 bg-sky-100 rounded-md">
      <div className="px-2">
        <input
          name="valueX"
          type="number"
          className="p-2 rounded-md mr-6 drop-shadow-xl"
          placeholder="Enter the value of X"
          onChange={handleInputValue}
        />
        <button className="bg-sky-600 text-white p-2 rounded-md hover:bg-sky-900 drop-shadow-xl cursor-pointer">
          GO
        </button>
      </div>
      <div className="m-2 my-10 flex gap-10 justify-center">
        <FunctionCard
          funcNo={1}
          valueX={2}
          defaultValue="x^2"
          nextFunction={2}
        />
        <FunctionCard
          funcNo={1}
          valueX={2}
          defaultValue="x^2"
          nextFunction={2}
        />
        <FunctionCard
          funcNo={1}
          valueX={2}
          defaultValue="x^2"
          nextFunction={2}
        />
        <FunctionCard
          funcNo={1}
          valueX={2}
          defaultValue="x^2"
          nextFunction={2}
        />
        <FunctionCard
          funcNo={1}
          valueX={2}
          defaultValue="x^2"
          nextFunction={2}
        />
      </div>
      <Output />
    </div>
  );
};

export default Body;

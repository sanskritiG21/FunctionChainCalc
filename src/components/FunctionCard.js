import React, { useState } from "react";
import { PiDotsSix } from "react-icons/pi";
import InputRadio from "./InputRadio";

const FunctionCard = ({
  funcNo,
  defaultValue,
  output,
  updateEquation,
  setNodes,
  setEdges,
  nodes,
  edges,
}) => {
  const [error, setError] = useState(false);
  const handleEquationChange = (e) => {
    const value = e.target.value;
    const validPattern = /^[0-9+\-*/^x\s]*$/;

    if (validPattern.test(value)) {
      setError(false);
      updateEquation(funcNo, value);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-white w-64 p-4 rounded-xl drop-shadow-xl">
      <div className="flex items-center text-gray-500">
        <PiDotsSix className="mr-2 text-xl" />
        <h6>Function: {funcNo}</h6>
      </div>
      <div className="my-2 py-2 px-1">
        <div>
          <h6 className="text-sm mb-1">Equation</h6>
          <input
            type="text"
            name="equation"
            className={`p-2 border-2 rounded-lg text-sm w-[100%] focus:outline-none ${
              error && "border-red-500"
            }`}
            defaultValue={defaultValue}
            onChange={handleEquationChange}
          />
        </div>
        <div className="my-4">
          <h6 className="text-sm mb-1">Next function</h6>
          <select
            name="function"
            className="p-2 border-2 rounded-lg text-sm w-[100%] text-gray-500 bg-gray-100"
            disabled="true">
            <option>Function: {output}</option>
          </select>
        </div>
      </div>
      <InputRadio
        funcNo={funcNo}
        setNodes={setNodes}
        setEdges={setEdges}
        nodes={nodes}
        edges={edges}
      />
    </div>
  );
};

export default FunctionCard;

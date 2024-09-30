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
    <div className="function-card-wrapper">
      <div className="fc-header">
        <PiDotsSix className="fc-6-dots" />
        <h6>Function: {funcNo}</h6>
      </div>
      <div className="fc-input-wrapper">
        <div>
          <h6 className="fc-equation-txt">Equation</h6>
          <input
            type="text"
            name="equation"
            className={`fc-equation-input ${error && "border-red-500"}`}
            defaultValue={defaultValue}
            onChange={handleEquationChange}
          />
        </div>
        <div className="my-4">
          <h6 className="fc-equation-txt">Next function</h6>
          <select name="function" className="fc-dropdown" disabled="true">
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

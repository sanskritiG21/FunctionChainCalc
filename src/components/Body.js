import React, { useEffect, useState, useCallback } from "react";
import FunctionCard from "./FunctionCard";
import Output from "./Output";
import { DATA, EDGES } from "../utils/data";
import { calculateEquation, determineChainOrder } from "../utils/calculation";
import RadioIcon from "./RadioIcon";

const Body = () => {
  const [functionData, setFunctionData] = useState(DATA || []);
  const [valX, setValX] = useState("");
  const [finalOutput, setFinalOutput] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState(EDGES);

  const functionChainCalc = () => {
    let currentValue = parseFloat(valX);
    const chainOrder = determineChainOrder(functionData);
    chainOrder.forEach((funcId) => {
      const { defaultEq } = functionData.find(({ id }) => id === funcId);
      const result = calculateEquation(currentValue, defaultEq);
      currentValue = result;
    });
    setFinalOutput(currentValue);
  };

  const handleUpdateEquation = (funcNo, newEquation) => {
    setFunctionData((prevData) =>
      prevData.map((func) =>
        func.id === funcNo ? { ...func, defaultEq: newEquation || "0" } : func
      )
    );
  };

  const handleInputValue = useCallback(
    (e) => {
      const { value } = e.target;
      setValX(value);
      functionChainCalc();
    },
    [valX]
  );

  useEffect(() => {
    functionChainCalc();
  }, [functionData, valX]);

  return (
    <div className="body-container">
      {/* Input Section */}
      <div className="middle-align-input">
        <div>
          <h6 className="input-pill">Initial value of x</h6>
          <div className="input-container">
            <input
              name="valueX"
              type="number"
              className="input-item"
              onChange={handleInputValue}
            />
            <div className="middle-align-radiobtn">
              <RadioIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Function Cards */}
      <div className="function-cads-wrapper">
        {functionData?.map(({ id, defaultEq, output }) => (
          <FunctionCard
            funcNo={id}
            defaultValue={defaultEq}
            output={output}
            updateEquation={handleUpdateEquation}
            setNodes={setNodes}
            setEdges={setEdges}
            nodes={nodes}
            edges={edges}
          />
        ))}
      </div>

      {/* Final Output */}
      <Output finalOutput={finalOutput} />
    </div>
  );
};

export default Body;

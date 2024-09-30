import React, { useEffect, useState, useCallback } from "react";
import FunctionCard from "./FunctionCard";
import Output from "./Output";
import { data } from "../utils/data";
import { calculateEquation, determineChainOrder } from "../utils/calculation";
import RadioIcon from "./RadioIcon";

const Body = () => {
  const [functionData, setFunctionData] = useState(data || []);
  const [valX, setValX] = useState("");
  const [finalOutput, setFinalOutput] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([
    { id: "1-2", source: "1", target: "2" },
    { id: "2-3", source: "2", target: "3" },
    { id: "3-4", source: "3", target: "4" },
    { id: "4-5", source: "4", target: "5" },
  ]);

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
      <div className="flex align-middle items-center w-64 ">
        <div className="">
          <h6 className="bg-[#e29a2e] text-white rounded-full text-center mb-1 px-2 py-0.5">
            Initial value of x
          </h6>
          <div className="p-2 flex rounded-2xl  drop-shadow-xl border-[#e29a2e] border-2 bg-white">
            <input
              name="valueX"
              type="number"
              className="border-none focus:outline-none px-2 border-r-2 w-24"
              onChange={handleInputValue}
            />
            <div className="flex align-middle items-center px-2">
              <RadioIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Function Cards */}
      <div className="function-cads-wrapper w-[80%] ">
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

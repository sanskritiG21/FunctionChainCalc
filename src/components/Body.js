import React, { useEffect, useState } from "react";
import FunctionCard from "./FunctionCard";
import Output from "./Output";
import { data } from "../utils/data";
import { calculateEquation } from "../utils/calculation";

const Body = () => {
  const [functionData, setFunctionData] = useState(data || []);
  const [valX, setValX] = useState("");
  const [finalOutput, setFinalOutput] = useState("");

  const functionChainCalc = () => {
    let currentValue = parseFloat(valX);

    const chainOrder = [1, 2, 4, 5, 3];
    chainOrder.forEach((funcId) => {
      const { defaultEq } = functionData.find(({ id }) => id === funcId);
      const result = calculateEquation(currentValue, defaultEq);
      currentValue = result;
    });
    setFinalOutput(currentValue);
  };

  const handleInputValue = (e) => setValX(e.target.value);

  const handleGoClick = () => {
    functionChainCalc();
  };

  const handleUpdateEquation = (funcNo, newEquation) => {
    setFunctionData((prevData) =>
      prevData.map((func) =>
        func.id === funcNo ? { ...func, defaultEq: newEquation } : func
      )
    );
  };

  useEffect(() => {
    functionChainCalc();
  }, [functionData]);

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
        <button
          className="bg-sky-600 text-white p-2 rounded-md hover:bg-sky-900 drop-shadow-xl cursor-pointer"
          onClick={handleGoClick}>
          GO
        </button>
      </div>
      <div className="m-2 my-10 flex gap-10 justify-center flex-wrap">
        {functionData?.map(({ id, defaultEq, output }) => (
          <FunctionCard
            funcNo={id}
            defaultValue={defaultEq}
            output={output}
            updateEquation={handleUpdateEquation}
          />
        ))}
      </div>
      <Output finalOutput={finalOutput} />
    </div>
  );
};

export default Body;

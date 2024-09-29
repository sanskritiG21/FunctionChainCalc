import React from "react";

const Output = ({ finalOutput }) => {
  return (
    <div className="flex justify-end">
      <div>
        <h6>Output (y)</h6>
        <input
          name="valueY"
          type="number"
          className="p-2 rounded-lg mr-6 drop-shadow-xl border-green-500 border-2 bg-white"
          placeholder="Output value"
          defaultValue={finalOutput}
          disabled
        />
      </div>
    </div>
  );
};

export default Output;

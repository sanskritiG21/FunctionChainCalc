import React from "react";

const Output = ({ outputVal }) => {
  return (
    <div className="flex justify-end">
      <input
        name="valueY"
        type="number"
        className="p-2 rounded-lg mr-6 drop-shadow-xl border-green-500 border-2 bg-white"
        placeholder="Output value"
        defaultValue={outputVal}
        disabled
      />
    </div>
  );
};

export default Output;

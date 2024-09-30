import React, { useEffect, useRef, useState } from "react";

const InputRadio = ({ funcNo, setNodes, setEdges, nodes, edges }) => {
  const inputRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const updatePosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();

      setNodes((prevNodes) => {
        const newNodes = [...prevNodes];
        const nodeIndex = newNodes.findIndex((node) => +node.id === +funcNo);

        const updatedNode = {
          id: String(funcNo),
          position: {
            x: rect.left,
            y: rect.top,
          },
        };

        if (nodeIndex > -1) {
          newNodes[nodeIndex] = {
            ...newNodes[nodeIndex],
            ...updatedNode,
          };
        } else {
          newNodes.push(updatedNode);
        }

        return newNodes;
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);

    setTimeout(updatePosition, 100);

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [inputRef]);

  useEffect(() => {
    if (isMounted) {
      updatePosition();
    }
  }, [isMounted]);

  return (
    <div className="my-2 mx-1 flex justify-between text-gray-500">
      <div>
        <input
          type="radio"
          id="input"
          name="input"
          value="input"
          className="opacity-0 absolute peer"
          checked
          ref={inputRef}
        />
        <label
          htmlFor="input"
          className="flex items-center space-x-2 cursor-pointer">
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-sky-600">
            <span
              className={`w-2 h-2 "bg-sky-600" bg-sky-600 rounded-full peer-checked:block`}></span>
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
              className={`w-2 h-2  bg-sky-600 rounded-full peer-checked:block`}></span>
          </span>
        </label>
        <input
          type="radio"
          id="output"
          name="output"
          value="output"
          className="opacity-0 absolute peer"
          checked
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default InputRadio;

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
          className="no-opacity-input peer"
          checked
          ref={inputRef}
        />
        <label htmlFor="input" className="radio-icon-wrapper">
          <span className="radio-icon-sub-wrap">
            <span className="radio-icon-blue-dot"></span>
          </span>
          <span className="gray-mid">input</span>
        </label>
      </div>
      <div>
        <label htmlFor="input" className="radio-icon-wrapper">
          <span className="gray-mid">output</span>
          <span className="radio-icon-sub-wrap">
            <span className="radio-icon-blue-dot"></span>
          </span>
        </label>
        <input
          type="radio"
          id="output"
          name="output"
          value="output"
          className="no-opacity-input peer"
          checked
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default InputRadio;

import React, { useState } from "react";

const ToggleButton = ({ button1, button2, inHeader, setMode }) => {
  const [activeToggle, setActiveToggle] = useState("button2");

  const style = inHeader ? "relative w-80 h-16 bg-gray-300/20 rounded-full p-1 mr-2" : "relative w-80 h-16 bg-gray-300/20 rounded-full p-1"

  return (
    <div className={style}>
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-tiny-orange transition-transform duration-300 ${
          activeToggle === "button1" ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      <button
        className={`relative z-10 w-1/2 h-full text-center rounded-full ${
          activeToggle === "button1" ? "text-white" : "text-gray-800"
        }`}
        onClick={() => {
          setActiveToggle("button1");
          if (inHeader) {
            setMode(button1.toLowerCase());
          }
        }}
      >
        {button1}
      </button>

      <button
        className={`relative z-10 w-1/2 h-full text-center rounded-full ${
          activeToggle === "button2" ? "text-white" : "text-gray-800"
        }`}
        onClick={() => {
          setActiveToggle("button2");
          if (inHeader) {
            setMode(button2.toLowerCase());
          }
        }}
      >
        {button2}
      </button>
    </div>
  );
};

export default ToggleButton;

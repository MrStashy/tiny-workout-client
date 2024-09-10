import formatExerciseName from "../utils/formatExerciseName";
import { useState } from "react";
import DropdownOptionV2 from "./DropdownOptionV2";

export default function DropDownMenu({
  dataArr,
  selectedOption,
  setSelectedOption,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleClick() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleOptionClick(e) {
   setSelectedOption(e.target.id)
   setDropdownOpen(!dropdownOpen)
  }


  return (
    <div className="relative my-10">
      <button
        onClick={handleClick}
        className="flex place-items-center w-52 bg-slate-100 hover:bg-slate-200 justify-between p-4 rounded-md"
      >
        {formatExerciseName(selectedOption)}
        <img
          className="h-4"
          src={
            !dropdownOpen
              ? "src/assets/SVG/down-arrow-svgrepo-com.svg"
              : "src/assets/SVG/up-arrow-svgrepo-com.svg"
          }
        />
      </button>

      {dropdownOpen && (
        <div className="absolute bg-white w-52 flex flex-col items-center text-center rounded-lg border py-2 z-50">
          {dataArr.map((item, index) => {
            if (item === selectedOption) return;
            return (
              <DropdownOptionV2
                key={index + 'dropdown'}
                item={item}
                handleOptionClick={handleOptionClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

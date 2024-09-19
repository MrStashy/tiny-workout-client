import { useState, useRef, useEffect } from "react";
import DropdownOptionV2 from "./DropdownOptionV2";
import formatExerciseName from "../utils/formatExerciseName";

export default function DropDownMenu({
  dataArr,
  selectedOption,
  setSelectedOption,
}) {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);
 
   function handleClickOutside (event) {
     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
       setDropdownOpen(false);
     }
   };

   useEffect(() => {
      if (dropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownOpen]);
  

  function handleClick() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleOptionClick(e) {
   setSelectedOption(e.target.id)
   setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleClick}
        className="flex place-items-center w-52 bg-slate-100 hover:bg-slate-200 justify-between p-4 rounded-md"
      >
        {formatExerciseName(selectedOption)}
        <img
          className="h-4"
          src={
            !dropdownOpen
              ? "svg/down-arrow-svgrepo-com.svg"
              : "svg/up-arrow-svgrepo-com.svg"
          }
        />
      </button>

      {dropdownOpen && (
        <div className="absolute bg-white w-52 flex flex-col items-center text-center rounded-lg border border-tiny-orange py-2 z-50 max-h-52 overflow-auto">
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

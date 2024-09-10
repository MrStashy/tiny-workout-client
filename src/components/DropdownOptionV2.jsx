import formatExerciseName from "../utils/formatExerciseName"

export default function DropdownOptionV2 ({item, handleOptionClick}) {
    return (
        <p onClick={handleOptionClick} id={item} className="hover:bg-tiny-orange text-slate-700 hover:text-white h-8 cursor-pointer flex items-center justify-center w-full">
          {formatExerciseName(item)}
        </p>
    )
}
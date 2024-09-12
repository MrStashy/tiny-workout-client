import ToggleButton from "./ToggleButtons";
import { useLocation } from "react-router-dom";

export default function Header({ setMode }) {
  const location = useLocation().pathname

  return (
    <header className="min-h-40 flex flex-row place-items-center justify-between px-10">
      <img className="h-logo w-logo ml-10" src="src/assets/SVG/logo.svg"></img>
        {location === "/dashboard" && 
        <div className="flex flex-row place-items-center gap-2">
        <ToggleButton button1={"Workout"} button2={"Stats"} inHeader={true} setMode={setMode} />
        <img className="h-16 bg-gray-300/20 rounded-full p-2" src="src/assets/SVG/profile-avatar.svg"/>
        </div>
        }
    </header>
  );
}

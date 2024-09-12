import ToggleButton from "./ToggleButtons";
import { useLocation } from "react-router-dom";

export default function Header({ setMode }) {
  const location = useLocation().pathname

  return (
    <header className="min-h-40 flex flex-row place-items-center justify-between">
      <img className="h-logo w-logo ml-10" src="src/assets/SVG/logo.svg"></img>
        {location === "/dashboard" && <ToggleButton button1={"Workout"} button2={"Stats"} inHeader={true} setMode={setMode} />}
    </header>
  );
}

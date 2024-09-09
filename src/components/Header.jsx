import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ToggleButton from "./ToggleButtons";
import { ProtectedRoute } from "../context/ProtectedRoute";

export default function Header({ setMode }) {

  return (
    <header className="h-40 flex flex-row place-items-center justify-between">
      <img className="h-logo w-logo ml-10" src="src/assets/SVG/logo.svg"></img>
      <ProtectedRoute>
        <ToggleButton button1={"Workout"} button2={"Stats"} inHeader={true} setMode={setMode} />
      </ProtectedRoute>
    </header>
  );
}

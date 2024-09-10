import ToggleButton from "../components/ToggleButtons";
import WorkoutHistoryCard from "../components/WorkoutHistoryCard"
import CurrentWorkoutCard from "../components/CurrentWorkoutCard"
import { useState } from "react";

export default function WorkoutWindow() {
    const [mode, setMode] = useState("current")


   

  return (
    <main className="bg-white h-full mb-4 mx-8 rounded-xl flex flex-col items-center justify-between p-8 gap-8">
   
        {mode === "history" && <WorkoutHistoryCard />
        }

        {mode === "current" && <CurrentWorkoutCard />
        }
      <ToggleButton button1={"Current"} button2={"History"} setMode={setMode} />


      </main>
  );
}

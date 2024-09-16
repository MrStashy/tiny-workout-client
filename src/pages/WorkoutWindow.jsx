import ToggleButton from "../components/ToggleButtons";
import WorkoutHistoryCard from "../components/WorkoutHistoryCard"
import CurrentWorkoutCard from "../components/NewWorkoutCard"
import { useState } from "react";

export default function WorkoutWindow() {
    const [mode, setMode] = useState("history")


   

  return (
    <main className="bg-white h-full max-h-full mb-4 mx-8 rounded-xl flex flex-col items-center justify-between p-8 gap-8">
   
        {mode === "history" && <WorkoutHistoryCard />
        }

        {mode === "new" && <CurrentWorkoutCard />
        }
      <ToggleButton button1={"New"} button2={"History"} setMode={setMode} mode={mode}/>


      </main>
  );
}

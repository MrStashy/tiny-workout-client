import { useState, useEffect, useContext } from "react";
import ToggleButtons from "../components/ToggleButtons";
import { UserContext } from "../context/UserContext";
import { getNamedExercisesByUserId, getAllExerciseNamesByUserId } from "../utils/apiFunctions";
import DropdownOption from "../components/DropdownOption";
import StatsCard from "../components/StatsCard";
import ChartsCard from "../components/ChartsCard";

export default function StatsWindow() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [exerciseData, setExerciseData] = useState({});
  const [exerciseNames, setExerciseNames] = useState([])
  const [statsMode, setStatsMode] = useState("stats")
  const { currentUser } = useContext(UserContext);

  async function updateExerciseData() {
    const data = await getNamedExercisesByUserId(1, selectedExercise); //Set at 1 for debugging
    const { exercises } = data;
    setExerciseData(exercises);
  }

  async function updateExerciseNames() {
    const data = await getAllExerciseNamesByUserId(1) //Set at 1 for debugging
    setExerciseNames(data.exercises)
    setSelectedExercise(data.exercises[0])
  }

  useEffect(() => {
    updateExerciseNames()
  }, [])

  useEffect(() => {
    if (exerciseNames.length > 0) {
      updateExerciseData();
    }
    
  }, [selectedExercise]);


  function handleChange(e) {
    setSelectedExercise(e.target.value);
  }

  return (
    <main className="bg-white h-full my-4 mx-8 rounded-xl flex flex-col items-center">
      <div className="mt-10">
        <select onChange={handleChange} value={selectedExercise}>
        {exerciseNames.map((exerciseName, index) => {
          return <DropdownOption key={"dropdown" + index} exerciseName={exerciseName} />
        })}
        </select>
      </div>
      <div className="flex-grow">
       {exerciseData.length > 0 && statsMode === "stats" && <StatsCard exerciseData={exerciseData} />}
       {exerciseData.length > 0 && statsMode === "charts" && <ChartsCard exerciseData={exerciseData} />}          
      </div>
      <div className="mb-10">
      <ToggleButtons button1={"Charts"} button2={"Stats"} setMode={setStatsMode}/>
      </div>
    </main>
  );
}

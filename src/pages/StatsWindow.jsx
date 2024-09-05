import { useState, useEffect, useContext } from "react";
import ToggleButtons from "../components/ToggleButtons";
import { UserContext } from "../context/UserContext";
import { getNamedExercisesByUserId } from "../utils/apiFunctions";
import StatsCard from "../components/StatsCard";

export default function StatsWindow() {
  const [selectedExercise, setSelectedExercise] = useState("Overall");
  const [exerciseData, setExerciseData] = useState({});
  const { currentUser } = useContext(UserContext);

  async function updateData() {
    const data = await getNamedExercisesByUserId(1, selectedExercise); //Set for 1 for debugging
    const { exercises } = data;
    setExerciseData(exercises);
  }

  useEffect(() => {
    updateData();
  }, [selectedExercise]);

  function handleChange(e) {
    setSelectedExercise(e.target.value);
  }

  return (
    <main className="bg-white h-full my-4 mx-8 rounded-xl flex flex-col items-center">
      <div className="mt-10">
        <select onChange={handleChange} value={selectedExercise}>
          <option value="Overall">Overall</option>
          <option value="bench-press">Bench Press</option>
          <option value="squat">Squat</option>
          <option value="deadlift">Dead Lift</option>
        </select>
      </div>
      <div className="flex-grow">
        {exerciseData.length > 0 ? (
          <StatsCard exerciseData={exerciseData} />
        ) : (
          <p>No Exercises Found</p>
        )}
      </div>
      <div className="mb-10">
      <ToggleButtons button1={"Charts"} button2={"Stats"} />
      </div>
    </main>
  );
}

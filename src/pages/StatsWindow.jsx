import { useState, useEffect, useContext } from "react";
import ToggleButtons from "../components/ToggleButtons";
import { UserContext } from "../context/UserContext";
import {
  getNamedExercisesByUserId,
  getAllExerciseNamesByUserId,
} from "../utils/apiFunctions";
import DropDownMenu from "../components/DropDownMenu";
import StatsCard from "../components/StatsCard";
import ChartsCard from "../components/ChartsCard";

export default function StatsWindow() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [exerciseData, setExerciseData] = useState({});
  const [exerciseNames, setExerciseNames] = useState([]);
  const [statsMode, setStatsMode] = useState("stats");
  const { currentUser } = useContext(UserContext);

  async function updateExerciseData() {
    const data = await getNamedExercisesByUserId(currentUser.id, selectedExercise);
    const { exercises } = data;
    setExerciseData(exercises);
  }


  async function updateExerciseNames() {
    const data = await getAllExerciseNamesByUserId(currentUser.id); 
    setExerciseNames(data.exercises);
    setSelectedExercise(data.exercises[0]);
  }

  useEffect(() => {
    if(!currentUser.id) {
      return
    }
   
    updateExerciseNames();
  }, [currentUser]);

  useEffect(() => {
    if (exerciseNames.length > 0) {
      updateExerciseData();
    }
  }, [selectedExercise, currentUser]);

  if (!currentUser) {
    return(<p>Loading</p>)
  }

  return (
    <main className="bg-white h-full mb-4 mx-8 rounded-xl flex flex-col items-center p-8 gap-4">
    {exerciseNames.length === 0 && <p className="bg-slate-200 p-4 rounded-lg shadow-md text-tiny-orange">Hit the gym to generate stats!</p>}
    {exerciseNames.length > 0 && 
      <>
      <DropDownMenu
        dataArr={exerciseNames}
        selectedOption={selectedExercise}
        setSelectedOption={setSelectedExercise}
      />

      <div className="flex-grow overflow-auto w-full">
        {exerciseData.length > 0 && statsMode === "stats" && (
          <StatsCard exerciseData={exerciseData} />
        )}
        {exerciseData.length > 0 && statsMode === "charts" && (
          <ChartsCard exerciseData={exerciseData} />
        )}
      </div>
      <div>
        <ToggleButtons
          button1={"Charts"}
          button2={"Stats"}
          setMode={setStatsMode}
        />
      </div>
      </>}
    </main>
  );
}

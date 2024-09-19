import ExerciseCard from "./ExerciseCard.jsx";
import getDate from "../utils/getDate.js";
import { submitWorkout } from "../utils/apiFunctions.js";
import { useState, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { validateWorkout } from "../utils/validationFunctions.js"

export default function CurrentWorkoutCard() {
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const idCount = useRef(0);
  const emptyExercise = {
    name: "",
    sets: [],
  };
  const userId = useContext(UserContext).currentUser.id

  function handleAddNewExerciseClick() {
    idCount.current++;
    emptyExercise.id = idCount.current;

    setWorkoutExercises([...workoutExercises, emptyExercise]);
  }

  function handleDeleteExerciseClick(incomingExercise) {
    setWorkoutExercises((prev) =>
      prev.filter((exercise) => exercise.id !== incomingExercise.id)
    );
  }

 async function handleSubmit() {
    workoutExercises.map((exercise) => {
      delete exercise.id;
      exercise.sets.map((set) => {
        delete set.id;
      });
    });

    try {
        validateWorkout(workoutExercises)
        await submitWorkout(userId, workoutExercises)
        setWorkoutExercises([])
    } catch (e) {
        console.error(e)
        throw "Unable to save workout"
    }
  }

  return (
    <section className="bg-slate-200 w-full h-full max-h-[620px] rounded-lg flex flex-col place-items-center p-4 gap-2 overflow-auto">
      <p className="rounded-md text-slate-400">{getDate()}</p>
      <ul className="flex-grow w-10/12 flex flex-col gap-2">
        {workoutExercises.length > 0 &&
          workoutExercises.map((exercise) => {
            return (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                handleDeleteExerciseClick={handleDeleteExerciseClick}
              />
            );
          })}
      </ul>
      <footer className="flex flex-col cursor-pointer gap-2 text-center">
        <div onClick={handleAddNewExerciseClick} className="flex flex-col">
          <img className="h-8" src="/svg/add-square-svg-orange.svg" />
          <p className="text-tiny-orange">New Exercise</p>
        </div>
        <button
          className="bg-tiny-orange w-login-form h-login-form text-white font-semibold mt-6 rounded-full"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </footer>
    </section>
  );
}

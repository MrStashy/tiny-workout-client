import ExerciseCard from "./ExerciseCard";
import getDate from "../utils/getDate.js"
import { useState, useRef } from "react";


export default function CurrentWorkoutCard() {
    const [workoutExercises, setWorkoutExercises] = useState([])
    const idCount = useRef(0)
    const emptyExercise = {
        name: "",
        sets: []
    }

    function handleAddNewExerciseClick() {
        idCount.current ++
        emptyExercise.id = idCount.current

        setWorkoutExercises([...workoutExercises, emptyExercise])
    }

    function handleDeleteExerciseClick(incomingExercise) {

        setWorkoutExercises((prev) => prev.filter((exercise) => exercise.id !== incomingExercise.id))
    }

    function handleSubmit() {
        console.log(workoutExercises)
    }


    return (
        <section className="bg-slate-200 w-full h-full max-h-[600px] rounded-lg flex flex-col place-items-center p-4 gap-2 overflow-auto">
            <p className="rounded-md text-slate-400">{getDate()}</p>
            <ul className="flex-grow w-10/12 flex flex-col gap-2">
            {workoutExercises.length > 0 && 
                workoutExercises.map((exercise) => {
                return (
                    <ExerciseCard key={exercise.id} exercise={exercise} handleDeleteExerciseClick={handleDeleteExerciseClick}/>
                )
            })
            }
            </ul>
            <footer className="flex flex-col cursor-pointer gap-2 text-center">
            <div onClick={handleAddNewExerciseClick} className="flex flex-col">
        <img className="h-8" src="src/assets/SVG/add-square-svg-orange.svg"/>
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
    )
}

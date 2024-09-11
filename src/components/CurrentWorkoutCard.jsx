import ExerciseCard from "./ExerciseCard";
import getDate from "../utils/getDate.js"
import { useState, useRef } from "react";


export default function CurrentWorkoutCard() {
    const [workoutExercises, setWorkoutExercises] = useState([])
    const idCount = useRef(0)

    function handleAddNewExerciseClick() {
        idCount.current ++
        emptyExercise.id = idCount.current

        setWorkoutExercises([...workoutExercises, emptyExercise])
    }

    function handleDeleteExerciseClick(incomingExercise) {

        setWorkoutExercises((prev) => prev.filter((exercise) => exercise.id !== incomingExercise.id))
    }

    const emptyExercise = {
            name: "",
            sets: []
        }


    return (
        <section className="bg-slate-200 h-full w-full rounded-lg flex flex-col place-items-center p-4 gap-2 overflow-auto">
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
            <footer onClick={handleAddNewExerciseClick} className="flex flex-col cursor-pointer">
        <img className="h-8" src="src/assets/SVG/add-square-svg-orange.svg"/>
        <p className="text-tiny-orange">New Exercise</p>
        </footer>
        </section>
    )
}

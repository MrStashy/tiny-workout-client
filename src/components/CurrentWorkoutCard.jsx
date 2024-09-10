import ExerciseCard from "./ExerciseCard";
import getDate from "../utils/getDate.js"
import { useState, useRef } from "react";


export default function CurrentWorkoutCard() {
    const [currentExercises, setCurrentExercsises] = useState([])
    const idCount = useRef(0)

    function handleAddNewExerciseClick() {
        idCount.current ++
        emptyExercise.id = idCount.current
        setCurrentExercsises([...currentExercises, emptyExercise])
    }

    function handleDeleteExerciseClick(incomingExercise) {
        const filteredExercises = currentExercises.filter((exercise) => exercise.id !== incomingExercise.id)
        setCurrentExercsises(filteredExercises)
    }

    const emptyExercise = {
            name: "",
            sets: []
        }

    return (
        <section className="bg-slate-200 h-full w-full rounded-lg flex flex-col place-items-center overflow-auto">
            <p className="rounded-md text-slate-400">{getDate()}</p>
            <ul className="flex-grow w-10/12 flex flex-col gap-2">
            {currentExercises.length > 0 && 
                currentExercises.map((exercise, index) => {
                return (
                    <ExerciseCard key={index + "exercise"} exercise={exercise} handleDeleteExerciseClick={handleDeleteExerciseClick}/>
                )
            })
            }
            </ul>
            <button onClick={handleAddNewExerciseClick} className="border-tiny-orange border text-tiny-orange py-2 px-4 font-semibold mt-6 rounded-full">Add New Exercise</button>
        </section>
    )
}

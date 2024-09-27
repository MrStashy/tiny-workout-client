import DropDownMenu from "./DropDownMenu"
import overallExerciseList from "../utils/exerciseList"
import { useState, useRef } from "react"
import SetBar from "./SetBar"


export default function ExerciseCard({ exercise, handleDeleteExerciseClick }) {
const [selectedExercise, setSelectedExercise] = useState("Choose exercise")
const [currentSets, setCurrentSets] = useState([])
const idCount = useRef(0)

exercise.name = selectedExercise
const emptySet = {weight: "", reps: ""}

function handleNewSetClick() {
    idCount.current ++
    emptySet.id = idCount.current

    exercise.sets.push(emptySet)
    setCurrentSets([...currentSets, emptySet])
}

function handleDeleteSetClick(incomingSet) {
    const filteredSets = currentSets.filter((set) => set.id !== incomingSet.id)
   
    exercise.sets = filteredSets
    setCurrentSets((prev) => prev.filter((set) => set.id !== incomingSet.id))
}

    return (
        <article className="bg-tiny-orange p-4 flex flex-col place-items-center rounded-lg justify-between gap-2">
        <header className="relative flex justify-center w-full">
            <DropDownMenu 
                dataArr={overallExerciseList} 
                setSelectedOption={setSelectedExercise} 
                selectedOption={selectedExercise}
            />
            <img onClick={() => handleDeleteExerciseClick(exercise)} className="h-8 absolute top-0 right-0 cursor-pointer" src="/svg/delete-1-svgrepo-com.svg" />
        </header>
        <section className="flex flex-col gap-2 w-full place-items-center">
            {currentSets.length > 0 && 
                currentSets.map((set) => {
                    return (
                        <SetBar key={set.id} set={set} handleDeleteSetClick={handleDeleteSetClick} setNumber={currentSets.indexOf(set)}/>
                    )
                })
            }
        </section>
        <footer onClick={handleNewSetClick} className="flex flex-col cursor-pointer">
        <img className="h-8" src="/svg/add-square-svgrepo-com.svg"/>
        <p className="text-white">New Set</p>
        </footer>
    </article>
    )
}
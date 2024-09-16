import { useEffect, useContext, useState } from "react"
import { UserContext } from "../context/UserContext.jsx";
import { getWorkoutsByIdPaginated } from "../utils/apiFunctions.js";
import PaginationModule from "./PaginationModule.jsx";
import formatDate from "../utils/formatDate.js"
import formatExerciseName from "../utils/formatExerciseName.js";

export default function WorkoutHistoryCard() {
    const [pageOfWorkouts, setPageOfWorkouts] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [clickedWorkoutId, setClickedWorkoutId] = useState(0)

    const userId = useContext(UserContext).currentUser.id
    const itemsPerPage = 5

    async function getWorkouts() {
        const { workouts } = await getWorkoutsByIdPaginated(userId, pageNo, itemsPerPage)
        setPageOfWorkouts(workouts)
    }

    useEffect(() => {
        getWorkouts()
    }, [pageNo])

    function handleClick(e) {
        if (Number(e.target.id) === clickedWorkoutId) {
            setClickedWorkoutId(0)
            return
        }
        setClickedWorkoutId(Number(e.target.id))
    }

    return (
        <section className="bg-slate-200 w-full h-full max-h-[620px] rounded-lg flex flex-col place-items-center justify-between p-4 gap-4 overflow-auto">
        <p className="rounded-md text-slate-400">Workout History</p>
        <ul className="flex flex-col gap-2">
        {pageOfWorkouts.length > 0 && pageOfWorkouts.map((workout) => {
            return(
                <li key={workout.id} className="flex flex-col gap-2">
                <button className="border border-tiny-orange text-tiny-orange hover:text-white hover:bg-tiny-orange rounded-full w-64 h-12 font-light" id={workout.id} onClick={handleClick}>{formatDate(workout.createdAt)}</button>

                {workout.id === clickedWorkoutId && 
                <WorkoutDetails workout={workout} />
                }
                </li>
            )
        })}
        {pageOfWorkouts.length === 0 && <p>No workouts!</p>}
        </ul>
       <PaginationModule pageNo={pageNo} setPageNo={setPageNo} workoutsOnPage={pageOfWorkouts.length}/>
      </section>
    )
}

function WorkoutDetails({workout}) {
    const { exercises } = workout
    
    return (
        <ul className="bg-white text-xs p-4 rounded-lg shadow-lg">
            {exercises.map((exercise) => {
                return (
                    <li key={exercise.id} className="flex flex-col gap-1 mb-1">
                        <p className="bg-tiny-orange text-white rounded-md p-1">{formatExerciseName(exercise.name)}</p>
                        {exercise.sets.map((set, index) => {
                            return (
                                <ul key={set.id} className="flex flex-row gap-4 justify-between text-slate-500">
                                <li >Set {index + 1}</li>
                                <li>{set.weight /1000} kg</li>
                                <li>Reps: {set.reps}</li>
                                </ul>
                            )
                        })}

                    </li>
                )
            })}
        </ul>
    )
}
import { useEffect, useContext, useState } from "react"
import { UserContext } from "../context/UserContext.jsx";
import { getWorkoutsByIdPaginated } from "../utils/apiFunctions.js";
import PaginationModule from "./PaginationModule.jsx";
import formatDate from "../utils/formatDate.js"

export default function WorkoutHistoryCard() {
    const [pageOfWorkouts, setPageOfWorkouts] = useState([])
    const [pageNo, setPageNo] = useState(1)

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
        console.log(e.target.id)
    }

    return (
        <section className="bg-slate-200 w-full h-full max-h-[620px] rounded-lg flex flex-col place-items-center p-4 gap-4">
        <p className="rounded-md text-slate-400">Workout History</p>
        <ul className="flex flex-col gap-2">
        {pageOfWorkouts.length > 0 && pageOfWorkouts.map((workout) => {
            return(
                <button className="border border-tiny-orange text-tiny-orange hover:text-white hover:bg-tiny-orange rounded-full w-64 h-12 font-light" key={workout.id} id={workout.id} onClick={handleClick}>{formatDate(workout.createdAt)}</button>
            )
        })}
        </ul>
       <PaginationModule pageNo={pageNo} setPageNo={setPageNo}/>
      </section>
    )
}
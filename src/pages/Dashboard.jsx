import StatsWindow from "./StatsWindow"
import WorkoutWindow from "./WorkoutWindow"

export default function Dashboard({mode}) {

    if (mode === "stats")
    return (
        <StatsWindow />
    )

    if (mode === "workout")
    return (
        <WorkoutWindow />
    )
}
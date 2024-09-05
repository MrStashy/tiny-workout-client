export default function Dashboard({mode}) {
  

    if (mode === "stats")
    return (
        <StatsWindow />
    )

    if (mode === "stats")
    return (
        <WorkoutWindow />
    )
}
import StatLi from "./StatLi"

export default function StatsCard({exerciseData}) {
    console.log(exerciseData)
    
    return (
        <ul>
            {exerciseData.map((exercise, index) => {
                return(
                    <StatLi key={index + exercise.name} exercise={exercise}/>
                )
            })}
        </ul>
    )
}
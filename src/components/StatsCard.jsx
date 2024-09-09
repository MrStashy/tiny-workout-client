import LatestExerciseStatLi from "./stats-card-lis/LatestExerciseStatLi";
import ExerciseAvgFrequencyLi from "./stats-card-lis/ExerciseAvgFrequencyLi";

export default function StatsCard({ exerciseData }) {

  return (<ul>
    <LatestExerciseStatLi exerciseData={exerciseData} />
    <ExerciseAvgFrequencyLi exerciseData={exerciseData}/>
  </ul>)
}

import LatestExerciseStatLi from "./stats-card-lis/LatestExerciseStatLi";
import ExerciseAvgFrequencyLi from "./stats-card-lis/ExerciseAvgFrequencyLi";
import TotalWeightMoved from "./stats-card-lis/TotalWeightMovedLi";
import EstimatedOneRepMax from "./stats-card-lis/EstimatedOneRepMax";

export default function StatsCard({ exerciseData }) {

  return (<ul>
    <LatestExerciseStatLi exerciseData={exerciseData} />
    <ExerciseAvgFrequencyLi exerciseData={exerciseData}/>
    <TotalWeightMoved exerciseData={exerciseData}/>
    <EstimatedOneRepMax exerciseData={exerciseData} />
  </ul>)
}

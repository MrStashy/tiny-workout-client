import LatestExerciseStatLi from "./stats-card-lis/LatestExerciseStatLi";
import ExerciseAvg from "./stats-card-lis/ExerciseAvg";

export default function StatsCard({ exerciseData }) {

  function latestExercise() {
    const sortedExercises = exerciseData.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const latestExercise = sortedExercises[0]
    return latestExercise
  }

  return (<ul>
    <LatestExerciseStatLi latestExercise={latestExercise()} />
    <ExerciseAvg />
  </ul>)
}

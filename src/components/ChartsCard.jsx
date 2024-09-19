import WeightMovedLast5Workouts from "./charts/WeightMoved";

export default function ChartsCard({ exerciseData }) {
  

  return (
    <ul>
      <WeightMovedLast5Workouts exerciseData={exerciseData}/>
    </ul>
  );
}

import formatExerciseName from "../../utils/formatExerciseName";

export default function LatestExerciseStatLi({ latestExercise }) {
  const { sets } = latestExercise;
  const exerciseDate = getDateOfLastExercise();
  const exerciseName = formatExerciseName(latestExercise.name);

  function getDateOfLastExercise() {
    return latestExercise.createdAt.slice(0,10).split('-').reverse().join('/')
  }

  return (
    <li>
    <p>Last workout:</p>
    <ul>
    {sets.map((set, index) => {
        const setNumber = sets.indexOf(set) + 1
        const weight = set.weight / 1000

        return (
            <li key={index + exerciseName}>Set {setNumber} - {set.reps} reps at {weight}kg </li>
        )
    })}
    </ul>
    <p>on {exerciseDate}</p>
    </li>
  ) 
}

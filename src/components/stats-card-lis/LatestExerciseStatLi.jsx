import formatExerciseName from "../../utils/formatExerciseName";

export default function LatestExerciseStatLi({ exerciseData }) {
  const { sets } = latestExercise();
  const exerciseDate = getDateOfLastExercise();
  const exerciseName = formatExerciseName(latestExercise.name);

  function getDateOfLastExercise() {
    return latestExercise().createdAt.slice(0,10).split('-').reverse().join('/')
  }

  function latestExercise() {
    const sortedExercises = exerciseData.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const latestExercise = sortedExercises[0]
    return latestExercise
  }

  return (
    <li className="bg-slate-200 mt-2 rounded-lg px-10 py-2 flex flex-col shadow-lg">
    <p className="font-semibold place-self-center">Latest Workout</p>
    <ul className="place-self-center">
    {sets.map((set, index) => {
        const setNumber = sets.indexOf(set) + 1
        const weight = set.weight / 1000

        return (
            <li className="text-xs" key={index + exerciseName}>Set {setNumber} - {set.reps} reps at {weight}kg </li>
        )
    })}
    </ul>
    <p className="text-xs place-self-center">on {exerciseDate}</p>
    </li>
  ) 
}

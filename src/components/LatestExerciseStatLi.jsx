export default function LatestExerciseStatLi({ latestExercise }) {
  const { sets } = latestExercise;
  const exerciseDate = getDateOfLastExercise();
  const exerciseName = formatExerciseName();

  console.log(sets)

  function formatExerciseName() {
    const unformattedName = latestExercise.name;
    if (unformattedName.includes("-")) {
      const name = unformattedName
        .split("-")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");

      return name;
    }
    return unformattedName.charAt(0).toUpperCase() + unformattedName.slice(1);
  }

  function getDateOfLastExercise() {
    return latestExercise.createdAt.slice(0,10).split('-').reverse().join('/')
  }

  return (
    <>
    <p>You last did {exerciseName} on {exerciseDate}</p>
    <ul>
    {sets.map((set, index) => {
        const setNumber = sets.indexOf(set) + 1
        const weight = set.weight / 1000

        return (
            <li key={index + exerciseName}>Set {setNumber}: {set.reps} reps at {weight}kg </li>
        )
    })}
    </ul>
    </>
  ) 
}

export default function EstimatedOneRepMax({ exerciseData }) {


  function findHeaviestSet() {
    let currentMostWeightMoved = 0;
    let heaviestSet = {};

    let setsArr = [];
    exerciseData.forEach((exercise) => setsArr.push(exercise.sets));
    let flatArr = setsArr.flat();
  

    for (let i = 0; i < flatArr.length; i++) {
      if (flatArr[i].reps * flatArr[i].weight > currentMostWeightMoved) {
        currentMostWeightMoved = flatArr[i].reps * flatArr[i].weight;
        heaviestSet = flatArr[i];
      }
    }
    if (Object.keys(heaviestSet).length === 0) {
      return {weight: 0, reps: 0}
    }
    return heaviestSet;
  }

  function estimateOneRepMax() {
    const heaviestSet = findHeaviestSet()
    return (Math.floor(heaviestSet.weight * (1 + (heaviestSet.reps / 30))) / 1000).toFixed(2) // Epley formula
  }


  return <li className="bg-slate-200 mt-2 rounded-lg px-10 py-2 flex flex-col shadow-lg">
   <p className="text-sm place-self-center">Your estimated one rep max is {`${estimateOneRepMax()}`}kg.</p>
  </li>;
}

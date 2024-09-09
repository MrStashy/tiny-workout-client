import formatExerciseName from "../../utils/formatExerciseName";

export default function ExerciseAvgFrequencyLi({exerciseData}) {
    function getExerciseFrequency() {
        const datesArr = exerciseData.map((exercise) => 
            new Date(exercise.sets[0].createdAt).getTime() / 86400000
        );
        const sortedDatesArr = datesArr.sort((a, b) => a - b);
        const differences = [];
        for (let i = 1; i < sortedDatesArr.length; i++) {
            differences.push(sortedDatesArr[i] - sortedDatesArr[i - 1]);
        }
    
        const averageDifference = differences.reduce((acc, diff) => acc + diff, 0) / differences.length;
    
       return Math.floor(averageDifference)
    }

    return (
        <li className="bg-slate-200 mt-2 rounded-lg px-10 py-2 flex flex-col shadow-lg">
            <p className="text-sm place-self-center">You're currently doing this exercise {getExerciseFrequency() === 1.00 ? "every day.": `every ${getExerciseFrequency()} days.`}</p>
        </li>
    )
}
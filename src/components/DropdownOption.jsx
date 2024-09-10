import formatExerciseName from "../utils/formatExerciseName"

export default function DropdownOptions({ exerciseName }) {

    return (
        <option value={exerciseName}>{formatExerciseName(exerciseName)}</option>
    )
}
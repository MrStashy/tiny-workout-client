import formatExerciseName from "../utils/formatExerciseName"

export default function DropdownOption({ exerciseName }) {

    return (
        <option value={exerciseName}>{formatExerciseName(exerciseName)}</option>
    )
}
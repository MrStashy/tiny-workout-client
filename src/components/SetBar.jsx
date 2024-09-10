export default function SetBar({set, handleDeleteSetClick}) {

    return (
        <div className="flex flex-row">
            <p>1</p>
            <label htmlFor="weight">Weight</label>
            <input name="weight" type="text-box"/>
            <label htmlFor="reps">Reps</label>
            <input name="reps" type="text-box"/>
            <img onClick={() => handleDeleteSetClick(set)} className="h-4" src="src/assets/SVG/delete-1-svgrepo-com.svg"/>
        </div>
    )
}
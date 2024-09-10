export default function SetBar({set, handleDeleteSetClick, number}) {

    return (
        <div className="flex flex-row gap-2 bg-slate-200/20 p-2 rounded-full min-w-96 justify-between font-light text-slate-200/70">
            <p className="bg-slate-200/50 rounded-full w-6 text-center text-white font-bold">{number + 1}</p>
            <div className="flex flex-row gap-4">
            <label htmlFor="weight">Weight</label>
            <input className="w-8 bg-transparent border-b font-bold text-white text-center" name="weight" type="text-box"/>
            <p>kg</p>
            </div>
            <div className="flex flex-row gap-4">
            <label htmlFor="reps">Reps</label>
            <input className="w-8 bg-transparent border-b font-bold text-white text-center" name="reps" type="text-box"/>
            </div>
            <img onClick={() => handleDeleteSetClick(set)} className="h-5 place-self-center cursor-pointer" src="src/assets/SVG/delete-1-svgrepo-com.svg"/>
        </div>
    )
}
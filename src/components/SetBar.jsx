import { useState } from "react";

export default function SetBar({ set, handleDeleteSetClick, setNumber }) {

  const [setData, setSetData] = useState({reps: "", weight: ""})

  function handleChange(e) {
    let { name, value } = e.target;

    if (isNaN(Number(value)) || value.length > 4) {
      return;
    }

    setSetData({...setData, [name]: value})
    
    if (name === "weight") {
      set.weight = value * 1000
    } else {
      set.reps = value
    }
  }

  return (
    <div className="flex flex-row gap-2 bg-slate-200/20 p-2 rounded-full justify-between font-light text-slate-200/70 w-11/12">
      <p className="bg-slate-200/50 rounded-full w-6 text-center text-white font-bold">
        {setNumber + 1}
      </p>
      <div className="flex flex-row gap-4">
        <label htmlFor="weight">Weight</label>
        <input
          onChange={handleChange}
          value={setData.weight === "0" ? "" : setData.weight}
          className="w-4 bg-transparent border-b font-bold text-white text-center"
          name="weight"
          type="text-box"
          placeholder="0"
          autoComplete="off"
        />
        <p>kg</p>
      </div>
      <div className="flex flex-row gap-4">
        <label htmlFor="reps">Reps</label>
        <input
          onChange={handleChange}
          value={setData.reps === "0" ? "" : setData.reps}
          className="w-4 bg-transparent border-b font-bold text-white text-center"
          name="reps"
          type="text-box"
          placeholder="0"
          autoComplete="off"
        />
      </div>
      <img
        onClick={() => handleDeleteSetClick(set)}
        className="h-5 place-self-center cursor-pointer"
        src="/svg/delete-1-svgrepo-com.svg"
      />
    </div>
  );
}

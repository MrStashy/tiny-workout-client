import weightMap from "../../utils/weightMap"

export default function TotalWeightMoved({ exerciseData }) {


    function totalWeightKg () {
        let accWeightG = 0
        for (let i = 0; i < exerciseData.length; i++) {
            let { sets } = exerciseData[i]
            for (let j = 0; j < sets.length; j++) {
                accWeightG += sets[j].reps * sets[j].weight
            }
        }
        return accWeightG / 1000
    }


    function getCorrespondingWeight(totalWeight) {
        let roundedNum;

      roundedNum < 1000 ? roundedNum = Math.round(totalWeight / 1000) * 1000 : roundedNum = Math.round(totalWeight / 5000) * 5000
     
        return weightMap[roundedNum]
    }


    return (
        <li className="bg-slate-200 mt-2 rounded-lg px-10 py-2 flex flex-col shadow-lg">
          <p className="text-sm place-self-center">In total, you've moved {`${totalWeightKg()}`}kg. That's {`${getCorrespondingWeight(totalWeightKg())}`}!</p>
        </li>
    )
}
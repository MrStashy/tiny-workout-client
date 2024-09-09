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
        const roundedNum = Math.round(totalWeight / 1000) * 1000

        if(roundedNum > 10000) return "a ridiculous amount of weight"

        const weightMap = {
            0: "getting higher!",
            1000: "the same as a sedan car",
            2000: "the same as a large male giraffe",
            3000: "the same as a medium-sized excavator",
            4000: "the same as a small boat",
            5000: "the same as a large whale shark",
            6000: "the same as a fully grown male lion",
            7000: "the same as a large adult hippo",
            8000: "the same as a fully grown adult bison",
            9000: "the same as a large shipping container",
            10000: "the same as a large bull elephant"
        };

        return weightMap[roundedNum]
    }


    return (
        <li className="bg-slate-200 mt-2 rounded-lg px-10 py-2 flex flex-col shadow-lg">
          <p className="text-sm place-self-center">In total, you've moved {`${totalWeightKg()}`}kg. That's {`${getCorrespondingWeight(totalWeightKg())}`}!</p>
        </li>
    )
}
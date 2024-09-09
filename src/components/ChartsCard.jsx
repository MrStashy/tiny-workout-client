import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import formatDateForGraph from "../utils/formatDateForGraph";

export default function ChartsCard({ exerciseData }) {
  function createChartData() {
    const dataArr = [];

    for (let i = 0; i < exerciseData.length; i++) {
      let runningTotal = 0;
      const { sets } = exerciseData[i];
      const { createdAt } = exerciseData[i];

      for (let j = 0; j < sets.length; j++) {
        runningTotal += sets[j].weight * sets[j].reps;
      }
      dataArr.push({
        name: formatDateForGraph(createdAt),
        weight: runningTotal / 10000,
      });
    }

    return dataArr;
  }

  const data = createChartData();

  return (
    <div className="bg-slate-200 mt-2 rounded-lg px-10 p-4 flex flex-col shadow-lg">
      <p className="text-slate-500 place-self-center">
        Weight Moved in Last 5 Workouts
      </p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: "#D06010" }}
          tickLine={{ stroke: "#D06010" }}
        />
        <YAxis
          label={{
            value: "Total Weight Moved (kg)",
            angle: -90,
            position: "insideLeft",
            fontSize: 12,
            offset: -10,
            dy: 70,
            fill: "#6B7280",
          }}
          domain={["dataMin", "dataMax"]}
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: "#D06010" }}
          tickLine={{ stroke: "#D06010" }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#D06010"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

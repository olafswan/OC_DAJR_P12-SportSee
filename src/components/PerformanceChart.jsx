import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = (data) => {
  console.log("data", data);
  console.log("data.data.id", data.data.id);
  console.log("data.data.performanceData", data.data.performanceData);

  return (
    <div className="bottomChart chart">
      {/* <h1>User: {props.data.data.userId}</h1> */}
      <h2>Radar chart des performances</h2>

      <RadarChart
        outerRadius={90}
        width={250}
        height={250}
        data={data.data.performanceData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 200]} />
        <Radar
          // name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default PerformanceChart;

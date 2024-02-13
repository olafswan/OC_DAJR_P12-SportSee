import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const ActivityLengthChart = (data) => {
  console.log("data", data);
  console.log("data.data.id", data.data.id);
  console.log("data.data.activity", data.data.activity);

  return (
    <div className="bottomChart chart">
      {/* <h1>User: {props.data.data.userId}</h1> */}
      <h2>Durée moyenne des sessions</h2>

      <LineChart width={250} height={250} data={data.data.averageSessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default ActivityLengthChart;

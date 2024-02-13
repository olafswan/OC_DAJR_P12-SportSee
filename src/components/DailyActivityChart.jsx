import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const DailyActivityChart = (data) => {
  console.log("data", data);
  console.log("data.data.id", data.data.id);
  console.log("data.data.activity", data.data.activity);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 1) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart">
      {/* <h1>User: {data.data.id}</h1> */}
      <h2>Activité quotidienne</h2>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        // width="100%"
        // height="100%"
        width={730}
        height={250}
        data={data.data.activity}
        margin={{ top: 16, right: 16, left: 16, bottom: 16 }}
        barGap={8}
        barSize={8}
      >
        <CartesianGrid
          strokeDasharray="2 2"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <Tooltip
          offset={40}
          cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          content={<CustomTooltip />}
        />
        <Legend
          wrapperStyle={{ top: 0, right: 0 }}
          align="right"
          verticalAlign="top"
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default DailyActivityChart;

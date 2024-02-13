import {
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TodayScore = (data) => {
  console.log("data", data);
  console.log("data.data.id", data.data.id);
  console.log("data.data.todayScore", data.data.todayScore);

  return (
    <div className="bottomChart chart">
      {/* <h1>User: {props.data.data.userId}</h1> */}
      <h2>Today score</h2>

      <PieChart width={250} height={250}>
        {/* <Pie
          data={data.data.todayScore}
          dataKey="todayScore"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        /> */}
        <Pie
          data={data.data.todayScore}
          dataKey="todayScore"
          nameKey="name"
          cx="50%"
          cy="50%"
          // startAngle={180}
          innerRadius={60}
          outerRadius={80}
          fill="fill"
          label
        />
      </PieChart>
      {/* 
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data.data.todayScore}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="todayScore"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart> */}
    </div>
  );
};

export default TodayScore;

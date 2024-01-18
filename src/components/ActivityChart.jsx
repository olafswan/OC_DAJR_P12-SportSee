import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
const dataMock = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
];

const ActivityChart = (props) =>{

    // const originalSessions = {props.data.data};

    // fonction pour séparer le nom du prénom
    // const activityFormator = sessions => {
      
    //   sessions.forEach(session => {
    //     console.log(session);
    //     const parts = session[day].split('-');
    //     const transformedDate = parseInt(parts[2], 10).toString();
    //     session[day] = transformedDate
    //   });

    //   // return ;
    // }
  
    return (
      <>
        <h1>User: {props.data.data.userId}</h1>
        {/* <h2>{props.data.data.sessions[0]calories}</h2> */}
        <h3>Activité quotidienne !</h3>
        <p>TODO formater les données d'activités des 7 derniers jours (poids et calories brûlées)</p>
        <p>filtrer les 7 dernières dates et ne recupérer que la date du jour pour 2020-07-03 => 3</p>

        {/* <BarChart width={730} height={250} data={dataMock}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart> */}

        <BarChart width={730} height={250} data={props.data.data.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </>
    );
  }
  
  export default ActivityChart;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchUserData,
  fetchActivityData,
  fetchAverageSessionsData,
  fetchPerformanceData,
} from "../api";
import User from "../user";
// import {
//   MOCK_MAIN_DATA,
//   MOCK_ACTIVITY,
//   MOCK_AVERAGE_SESSIONS,
//   MOCK_PERFORMANCE,
// } from "../assets/mock-data";
import DailyActivityChart from "./DailyActivityChart";
import ActivityLengthChart from "./ActivityLengthChart";
import PerformanceChart from "./PerformanceChart";
import KeyData from "./KeyData";
import TodayScore from "./TodayScore";

function Profile() {
  // mode mock ?
  const mockMode = true;

  // récupération de l'id dans l'url
  const { id } = useParams();

  // const [userData, setUserData] = useState(null);
  // const [activityData, setActivityData] = useState(null);
  // const [averageSessionsData, setAverageSessionsData] = useState(null);
  // const [performanceData, setPerformanceData] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // const navigate = useNavigate()

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const userData = await fetchUserData({ id }, mockMode);
        console.log("🙍‍♂️ ~ userData:", userData);
        // setUserData(userData);

        const activityData = await fetchActivityData({ id }, mockMode);
        console.log("🏋️‍♀️ ~ activityData:", activityData);
        // setActivityData(activityData);

        const averageSessionsData = await fetchAverageSessionsData(
          { id },
          mockMode
        );
        console.log("⏱ ~ averageSessionsData:", averageSessionsData);
        // setAverageSessionsData(averageSessionsData);

        const performanceData = await fetchPerformanceData({ id }, mockMode);
        console.log("🏆 ~ performanceData:", performanceData);
        // setPerformanceData(performanceData);

        // application de la class User pour merger toutes les données en une seule variable
        const thisUser = new User(
          userData,
          activityData,
          averageSessionsData,
          performanceData
        );
        // variable cumulant les 4 variables
        console.log("thisUser", thisUser);
        // variable d'état User
        setUser(thisUser);
        console.log("user", user);

        // if (mockMode) {
        //   // mockMode on : utiliser les données mockées
        //   console.log("✅ mock mod is ON !");
        //   console.log("MOCK_MAIN_DATA", MOCK_MAIN_DATA);
        //   console.log("MOCK_ACTIVITY", MOCK_ACTIVITY);
        //   console.log("MOCK_AVERAGE_SESSIONS", MOCK_AVERAGE_SESSIONS);
        //   console.log("MOCK_PERFORMANCE", MOCK_PERFORMANCE);
        //   // application de la classe User
        //   const thisUser = new User(
        //     MOCK_MAIN_DATA,
        //     MOCK_ACTIVITY,
        //     MOCK_AVERAGE_SESSIONS,
        //     MOCK_PERFORMANCE
        //   );
        //   // variable cumulant les 4 variables
        //   console.log("thisUser", thisUser);
        //   // variable d'activité avant mise en forme
        //   console.log("thisUser activity - donnée brute ", thisUser._activity);
        //   // variable d'activité après mise en forme
        //   console.log(
        //     "thisUser activity - donnée formatée ",
        //     thisUser.activity
        //   );
        //   // variable d'état User
        //   setUser(thisUser);
        //   console.log("user", user);
        //   // TODO pourquoi user === null?
        //   console.log("---MOCK MOD SETUP OK---");
        // } else if (
        //   userData &&
        //   activityData &&
        //   averageSessionsData &&
        //   performanceData
        // ) {
        //   // mockMode off : utiliser les données fetchées
        //   console.log("❌ mock mod is OFF !");
        //   console.log("userData", userData);
        //   console.log("activityData", activityData);
        //   console.log("averageSessionsData", averageSessionsData);
        //   console.log("performanceData", performanceData);
        //   // application de la classe User
        //   const thisUser = new User(
        //     userData,
        //     activityData,
        //     averageSessionsData,
        //     performanceData
        //   );
        //   // variable cumulant les 4 variables
        //   console.log("thisUser", thisUser);
        //   // variable d'état User
        //   setUser(thisUser);
        //   console.log("user", user);
        //   console.log("---FETCH MOD SETUP OK---");
        // }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  // console.log("activityData:", activityData);

  return (
    <>
      {/* <Header/> */}
      {/* <div className="main">
          <SideBar/> */}
      <main>
        <h1>
          Bonjour{" "}
          {/* <span className="firstName">{userData.data.userInfos.firstName}</span> */}
          {/* TODO mettre en com la ligne suivant si bug */}
          {/* <span className="firstName">{user.firstName}</span> */}
        </h1>
        {/* TODO mettre en com la ligne suivant si bug */}
        {/* <ActivityChart data={activityData} /> */}
        <div className="chartContainer">
          <div className="leftSide">
            <DailyActivityChart data={user} />
            <div className="bottomSide">
              <ActivityLengthChart data={user} />
              <PerformanceChart data={user} />
              <TodayScore data={user} />
            </div>
          </div>
          <KeyData data={user} />
        </div>
      </main>
      {/* </div> */}
    </>
  );
}

export default Profile;

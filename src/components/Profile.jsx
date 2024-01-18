import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import ActivityChart from './ActivityChart';
import { fetchUserData, fetchActivityData, fetchAverageSessionsData, fetchPerformanceData } from '../api';
import { activityFormator } from '../format';


function Profile() {

    // id dans l'url
    const {id} = useParams()
    // const id = "18"
    // const id = "18";
    // console.log("🚀 ~ file: Profile.jsx:11 ~ Profile ~ id:", id)
    // console.log("🚀", typeof(id));

    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [error, setError] = useState(null);
    // const navigate = useNavigate()
    
    useEffect(() => {
      // Function to fetch JSON data
      const fetchData = async () => {
          try {
              
        const userJsonData = await fetchUserData({id});
        console.log("🙍‍♂️ ~ file: Profile.jsx:36 ~ fetchData ~ userJsonData:", userJsonData)
        setUserData(userJsonData);

        let activityJsonData = await fetchActivityData({id});
        console.log("🏋️‍♀️ ~ file: Profile.jsx:40 ~ fetchData ~ activityJsonData:", activityJsonData)
        // activityFormator(activityJsonData),
        setActivityData(activityJsonData);

        console.log(activityData);

        const averageSessionsJsonData = await fetchAverageSessionsData({id});
        console.log("⏱ ~ file: Profile.jsx:44 ~ fetchData ~ averageSessionsJsonData:", averageSessionsJsonData)
        setAverageSessionsData(averageSessionsJsonData);

        const performanceJsonData = await fetchPerformanceData({id});
        console.log("🏆 ~ file: Profile.jsx:48 ~ fetchData ~ performanceJsonData:", performanceJsonData)
        setPerformanceData(performanceJsonData);


        
        // // MAIN DATA
        
        // const mainResponse = await fetch(`http://localhost:3000/user/${id}`); 
        // if (!mainResponse.ok) {
        //      throw new Error('Network response was not ok');
        // }
        // const mainJsonData = await mainResponse.json();
        
        // console.log("🚀 ~ mainJsonData:", mainJsonData)
        
        // setUserData(mainJsonData);
        
        // // ACTIVITY DATA
        
        // const activityResponse = await fetch(`http://localhost:3000/user/${id}/activity`); 
        // if (!activityResponse.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // const activityJsonData = await activityResponse.json();
        
        // console.log("🚀 ~ activityJsonData:", activityJsonData)
        
        // setActivityData(activityJsonData);
        
        // // AVERAGE SESSIONS DATA
        
        // const averageSessionsResponse = await fetch(`http://localhost:3000/user/${id}/average-sessions`); 
        // if (!averageSessionsResponse.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // const averageSessionsJsonData = await averageSessionsResponse.json();
        
        // console.log("🚀 ~ averageSessionsJsonData:", averageSessionsJsonData)
        
        // setAverageSessionsData(averageSessionsJsonData);
        
        // // PERFORMANCE DATA
        
        // const performanceResponse = await fetch(`http://localhost:3000/user/${id}/performance`); 
        // if (!performanceResponse.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // const performanceJsonData = await performanceResponse.json();
        
        // console.log("🚀 ~ performanceJsonData:", performanceJsonData)
        
        // setPerformanceData(performanceJsonData);
        
        // // si pas de données => erreur 404
        // if ( mainJsonData.length || activityJsonData.length || averageSessionsJsonData.length || performanceJsonData.length === 0) {
            //     navigate('/not-found')
            //     }

            
        } catch (error) {
            setError(error);
        }
        
    };
  
    fetchData();
    }, []); 
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!userData && !activityData) {
      return <div>Loading...</div>;
    }

    console.log("activityData:", activityData)



    return (
      <>
        {/* <Header/> */}
        {/* <div className="main">
          <SideBar/> */}
          <main>
            <h1>Bonjour <span className='firstName'>{userData.data.userInfos.firstName}</span>
            </h1>
            <ActivityChart data={activityData}/>
          </main>
        {/* </div> */}
      </>
    )
  }
  
  export default Profile
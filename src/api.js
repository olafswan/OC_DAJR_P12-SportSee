// import des données mock
import {
  MOCK_MAIN_DATA,
  MOCK_ACTIVITY,
  MOCK_AVERAGE_SESSIONS,
  MOCK_PERFORMANCE,
} from "./assets/mock-data";

// fetch des donées user
export const fetchUserData = async (id, isMocked) => {
  // récupération de l'id
  const userId = id.id;
  // console log du mode mock : true ou false
  console.log("❓ ~ fetchUserData ~ mock mod?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    // si mode mock ON retourner les données mock
    return MOCK_MAIN_DATA;
  } else {
    console.log("🙍‍♂️ ~ fetchUserData ~ id:", id);
    console.log("📥 return fetched data");
    // si mode mock OFF fetcher les données sur le serveur
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // retourner les données fetch
    return response.json();
  }
};

// fetch des donées activity
export const fetchActivityData = async (id, isMocked) => {
  // récupération de l'id
  const userId = id.id;
  // console log du mode mock : true ou false
  console.log("❓ ~ fetchActivityData ~ mock mod?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    // si mode mock ON retourner les données mock
    return MOCK_ACTIVITY;
  } else {
    console.log("🙍‍♂️ ~ fetchActivityData ~ id:", id);
    console.log("📥 return fetched data");
    // si mode mock OFF fetcher les données sur le serveur
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // retourner les données fetch
    return response.json();
  }
};

// fetch des donées average sessions
export const fetchAverageSessionsData = async (id, isMocked) => {
  // récupération de l'id
  const userId = id.id;
  // console log du mode mock : true ou false
  console.log("❓ ~ fetchAverageSessionsData ~ mock mod?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    // si mode mock ON retourner les données mock
    return MOCK_AVERAGE_SESSIONS;
  } else {
    console.log("🙍‍♂️ ~ fetchAverageSessionsData ~ id:", id);
    console.log("📥 return fetched data");
    // si mode mock OFF fetcher les données sur le serveur
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // retourner les données fetch
    return response.json();
  }
};

// fetch des donées performance
export const fetchPerformanceData = async (id, isMocked) => {
  // récupération de l'id
  const userId = id.id;
  // console log du mode mock : true ou false
  console.log("❓ ~ fetchPerformanceData ~ mock mod?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    // si mode mock ON retourner les données mock
    return MOCK_PERFORMANCE;
  } else {
    console.log("🙍‍♂️ ~ fetchPerformanceData ~ id:", id);
    console.log("📥 return fetched data");
    // si mode mock OFF fetcher les données sur le serveur
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // retourner les données fetch
    return response.json();
  }
};

import {
  MOCK_MAIN_DATA,
  MOCK_ACTIVITY,
  MOCK_AVERAGE_SESSIONS,
  MOCK_PERFORMANCE,
} from "./assets/mock-data";

const data = "./assets/mock-data";

export const fetchUserData = async (id, isMocked) => {
  const userId = id.id;
  console.log("❓ ~ fetchUserData ~ isMocked?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    return MOCK_MAIN_DATA;
  } else {
    console.log("🙍‍♂️ ~ fetchUserData ~ id:", id);
    console.log("📥 return fetched data");
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
};

export const fetchActivityData = async (id, isMocked) => {
  const userId = id.id;
  console.log("❓ ~ fetchActivityData ~ isMocked?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    return MOCK_ACTIVITY;
  } else {
    console.log("🙍‍♂️ ~ fetchActivityData ~ id:", id);
    console.log("📥 return fetched data");
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
};

export const fetchAverageSessionsData = async (id, isMocked) => {
  const userId = id.id;
  console.log("❓ ~ fetchAverageSessionsData ~ isMocked?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    return MOCK_AVERAGE_SESSIONS;
  } else {
    console.log("🙍‍♂️ ~ fetchAverageSessionsData ~ id:", id);
    console.log("📥 return fetched data");
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
};

export const fetchPerformanceData = async (id, isMocked) => {
  const userId = id.id;
  console.log("❓ ~ fetchPerformanceData ~ isMocked?", isMocked);
  if (isMocked) {
    console.log("💾 return mocked data");
    return MOCK_PERFORMANCE;
  } else {
    console.log("🙍‍♂️ ~ fetchPerformanceData ~ id:", id);
    console.log("📥 return fetched data");
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
};

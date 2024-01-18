export const fetchUserData = async (id) => {
  // console.log("🙍‍♂️ ~ fetchUserData ~ id:", id);
  const userId = id.id;
  // console.log("🙍‍♂️ ~ fetchUserData ~ userId:", userId);

  const response = await fetch(`http://localhost:3000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchActivityData = async (id) => {
  // console.log("🏋️‍♀️ ~ fetchActivityData ~ id:", id);
  const userId = id.id;
  // console.log("🏋️‍♀️ ~ fetchActivityData ~ userId:", userId);

  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchAverageSessionsData = async (id) => {
  // console.log("⏱ ~ fetchActivityData ~ id:", id);
  const userId = id.id;
  // console.log("⏱ ~ fetchActivityData ~ userId:", userId);

  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPerformanceData = async (id) => {
  // console.log("🏆 ~ fetchActivityData ~ id:", id);
  const userId = id.id;
  // console.log("🏆 ~ fetchActivityData ~ userId:", userId);

  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

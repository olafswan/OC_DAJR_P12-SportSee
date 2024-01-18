// fonction pour formater la date des sessions
export const activityFormator = (activityData) => {
  let response;

  activityData.data.sessions.forEach((session) => {
    console.log(session);
    const parts = session.day.split("-");
    const transformedDate = parseInt(parts[2], 10).toString();
    session[day] = transformedDate;
  });
};

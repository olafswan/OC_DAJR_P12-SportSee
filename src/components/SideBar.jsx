import Activity from "./Activity";

export default function SideBar() {
  const activitiesList = ["yoga", "swim", "bike", "gym"];

  return (
    <div className="side-bar">
      <div className="activities-container">
        {activitiesList.map((activity, i) => (
          <Activity activity={activity} key={activity} />
        ))}
      </div>
    </div>
  );
}

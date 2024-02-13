const KeyData = (data) => {
  console.log("data", data);
  console.log("data.data.id", data.data.id);
  console.log("data.data.calorieCount", data.data.calorieCount);
  console.log("data.data.proteinCount", data.data.proteinCount);
  console.log("data.data.carbCount", data.data.carbCount);
  console.log("data.data.fatCount", data.data.fatCount);
  console.log("data.data.performanceData", data.data.performanceData);

  const settings = [
    {
      type: "calorie",
      image: "calorie.svg",
      color: "#ff0002",
      backgroundColor: "#fbeaea",
      text: "Calories",
      unit: "kCal",
    },
    {
      type: "protein",
      image: "protein.svg",
      color: "#4ab8ff",
      backgroundColor: "#e9f4fb",
      text: "Proteines",
      unit: "g",
    },
    {
      type: "carb",
      image: "carb.svg",
      color: "#fdcc09",
      backgroundColor: "#fbf6e5",
      text: "Glucides",
      unit: "g",
    },
    {
      type: "fat",
      image: "fat.svg",
      color: "#fd5181",
      backgroundColor: "#fbeaef",
      text: "Lipides",
      unit: "g",
    },
  ];

  return (
    <div className="key-data">
      {settings.map((type) => (
        <div className="data-container">
          {/* ${type.backgroundColor} */}

          <div
            className="data-logo-container"
            style={{ backgroundColor: type.backgroundColor }}
          >
            <img src={`/src/assets/${type.type}.svg`} alt={type.type} />
          </div>

          <div className="data-text-container">
            <p className="data-text">
              {data.data[`${type.type}Count`]}
              {type.unit}
            </p>
            <p className="data-type">{type.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyData;

export default class User {
  constructor(
    userMainData,
    activityData,
    averageSessionsData,
    performanceData
  ) {
    this._id = userMainData[0].id;
    this._firstName = userMainData[0].userInfos.firstName;
    this._lastName = userMainData[0].userInfos.lastName;
    this._age = userMainData[0].userInfos.age;
    this._todayScore = userMainData[0].todayScore;
    this._calorieCount = userMainData[0].keyData.calorieCount;
    this._proteinCount = userMainData[0].keyData.proteinCount;
    this._carbohydrateCount = userMainData[0].keyData.carbohydrateCount;
    this._lipidCount = userMainData[0].keyData.lipidCount;
    this._activity = activityData[0].sessions;
    this._averageSessions = averageSessionsData[0].sessions;
    this._performanceKind = performanceData[0].kind;
    this._performanceData = performanceData[0].data;
  }

  // methode pour formater les milliers à la française
  toFrenchFormat(number) {
    let numString = number.toString();

    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get todayScore() {
    // return this._todayScore;
    return [
      {
        todayScore: this._todayScore,
        todayScorePercent: this._todayScore * 100,
        fill: "#8884d8",
      },
      {
        todayScore: 1 - this._todayScore,
        todayScorePercent: this._todayScore * 100,
        fill: "#fff",
      },
    ];
  }

  get calorieCount() {
    return this.toFrenchFormat(this._calorieCount);
  }

  get proteinCount() {
    return this.toFrenchFormat(this._proteinCount);
  }

  get carbCount() {
    return this.toFrenchFormat(this._carbohydrateCount);
  }

  get fatCount() {
    return this.toFrenchFormat(this._lipidCount);
  }

  get activity() {
    console.log("activity formating...");
    let formatedActivity = this._activity.map((session) => {
      return {
        day: new Date(session.day).getDate(),
        kilogram: session.kilogram,
        calories: session.calories,
      };
    });

    return formatedActivity;

    console.log("formatedActivity", formatedActivity);
    // utiliser map
    formatedActivity.forEach((session) => {
      console.log(session);
      console.log(session.day);

      // session.day = new Date(session.day).getDate();
      console.log(session.day);
      // session.day = getDate(session.day);

      // const parts = session.day.split("-");
      // console.log(parts);
      // const transformedDate = parseInt(parts[2], 10).toString();
      // console.log(transformedDate);
      // session.day = transformedDate;
      // console.log(session.day);
    });
    console.log("forEach ended");
    console.log("this._activity", this._activity);
    return formatedActivity;
  }

  get averageSessions() {
    return this._averageSessions;
    // console.log("average sessions formating...");
    // let formatedSessions = this._averageSessions.map((session) => {
    //   return {
    //     day: new Date(session.day).getDate(),
    //     kilogram: session.kilogram,
    //     length: session.sessionLength,
    //   };
    // });

    // return formatedSessions;
  }

  get performanceData() {
    // return this._performanceData;
    console.log("performance formating...");
    const kind = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    let formatedPerformance = this._performanceData.map((type) => {
      return {
        value: type.value,
        kind: kind[type.kind],
        // kind: this._performanceKind[type.kind],
      };
    });

    return formatedPerformance;
  }
}

// class Recipe {
//   constructor(recipes) {
//     this._id = recipes.id;
//     this._image = recipes.image;
//     this._name = recipes.name;
//     this._servings = recipes.servings;
//     this._ingredients = recipes.ingredients;
//     this._time = recipes.time;
//     this._description = recipes.description;
//     this._appliance = recipes.appliance;
//     this._ustensils = recipes.ustensils;
//   }

//   get image() {
//     return `/assets/recipes/${this._image}`;
//   }

//   get name() {
//     return this._name;
//   }

//   get servings() {
//     return this._servings;
//   }

//   get ingredients() {
//     return this._ingredients;
//   }

//   get time() {
//     return this._time;
//   }

//   get description() {
//     return this._description;
//   }

//   get appliance() {
//     return this._appliance;
//   }

//   get ustensils() {
//     return this._ustensils;
//   }
// }

// /////

// class FilterList {
//   constructor(ingredientsList, appliancesList, ustensilsList) {
//     this._ingredientsList = ingredientsList.sort();
//     this._appliancesList = appliancesList.sort();
//     this._ustensilsList = ustensilsList.sort();
//   }

//   filterFiller(listId, listName) {
//     // console.log("modification de la liste de tags", listName);

//     // cible la bonne liste de tags via la variable listName
//     const filterContainer = document.querySelector(`#${listName}`);
//     // cible le container où injecter les tags créés
//     const $wrapper = filterContainer.querySelector(".select-options-container");

//     // TODO supprimer la ligne suivant entraine des bugs
//     $wrapper.innerHTML = ``;

//     listId.forEach((item) => {
//       const option = document.createElement("p");
//       option.classList.add("select-option");
//       option.textContent = item;
//       $wrapper.appendChild(option);
//     });
//   }

//   // algoV2

//   fillFiltersLists() {
//     this.filterFiller(this._ingredientsList, "ingredients");
//     this.filterFiller(this._appliancesList, "appliances");
//     this.filterFiller(this._ustensilsList, "ustensils");
//   }
// }

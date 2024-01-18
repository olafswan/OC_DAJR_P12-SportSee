class User {
  constructor(userData, activityData, averageSessionsData, performanceData) {
    this._id = userData.id;
    this._firstName = userData.userInfos.firstName;
    this._lastName = userData.userInfos.lastName;
    this._age = userData.userInfos.age;
    this._todayScore = userData.todayScore;
    this._age = userData.userInfos.age;
    this._activity = activityData.sessions;
    this._averageSessions = averageSessionsData.sessions;
    this._performanceKind = performanceData.kind;
    this._performanceData = performanceData.data;
  }

  get id() {
    return this._id;
  }
}

class Recipe {
  constructor(recipes) {
    this._id = recipes.id;
    this._image = recipes.image;
    this._name = recipes.name;
    this._servings = recipes.servings;
    this._ingredients = recipes.ingredients;
    this._time = recipes.time;
    this._description = recipes.description;
    this._appliance = recipes.appliance;
    this._ustensils = recipes.ustensils;
  }

  get image() {
    return `/assets/recipes/${this._image}`;
  }

  get name() {
    return this._name;
  }

  get servings() {
    return this._servings;
  }

  get ingredients() {
    return this._ingredients;
  }

  get time() {
    return this._time;
  }

  get description() {
    return this._description;
  }

  get appliance() {
    return this._appliance;
  }

  get ustensils() {
    return this._ustensils;
  }
}

/////

class FilterList {
  constructor(ingredientsList, appliancesList, ustensilsList) {
    this._ingredientsList = ingredientsList.sort();
    this._appliancesList = appliancesList.sort();
    this._ustensilsList = ustensilsList.sort();
  }

  filterFiller(listId, listName) {
    // console.log("modification de la liste de tags", listName);

    // cible la bonne liste de tags via la variable listName
    const filterContainer = document.querySelector(`#${listName}`);
    // cible le container où injecter les tags créés
    const $wrapper = filterContainer.querySelector(".select-options-container");

    // TODO supprimer la ligne suivant entraine des bugs
    $wrapper.innerHTML = ``;

    listId.forEach((item) => {
      const option = document.createElement("p");
      option.classList.add("select-option");
      option.textContent = item;
      $wrapper.appendChild(option);
    });
  }

  // algoV2

  fillFiltersLists() {
    this.filterFiller(this._ingredientsList, "ingredients");
    this.filterFiller(this._appliancesList, "appliances");
    this.filterFiller(this._ustensilsList, "ustensils");
  }
}

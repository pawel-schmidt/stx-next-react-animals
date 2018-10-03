class AnimalsService {
  static get BASE_URL() {
    return "https://shibe.online/api/";
  }
  static get TYPES() {
    return ["shibes", "cats", "birds"];
  }
  getRandomAnimalType() {
    const randomIndex = Math.floor(Math.random() * AnimalsService.TYPES.length);
    return AnimalsService.TYPES[randomIndex];
  }
  getAnimals(type, count = 1) {
    type = AnimalsService.TYPES.includes(type) ? type : this.getRandomAnimalType();
    const url = AnimalsService.BASE_URL + type + "?count=" + count;
    return fetch(url).then(data => data.json());
  }
}

export default new AnimalsService();
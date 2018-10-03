class ShibesService {
  static get BASE_URL() {
    return "https://shibe.online/api/";
  }
  static get TYPES() {
    return ["shibes", "cats", "birds"];
  }
  getRandomShibesType() {
    const randomIndex = Math.floor(Math.random() * ShibesService.TYPES.length);
    return ShibesService.TYPES[randomIndex];
  }
  getShibes(type, count = 1) {
    type = ShibesService.TYPES.includes(type) ? type : this.getRandomShibesType();
    const url = ShibesService.BASE_URL + type + "?count=" + count;
    return fetch(url).then(data => data.json());
  }
}

export default new ShibesService();
import axios from "axios";
export default class Service {
  static async getPlanets() {
    const res = await axios.get("https://swapi.dev/api/planets/");
    return res;
  }
  static async getPlanet(id) {
    const planet = await axios.get("https://swapi.dev/api/planets/" + id);
    return planet;
  }
  static async getAllData(urls) {
    function fetchData(URL) {
      return axios
        .get(URL)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return error.message;
        });
    }
    let networkRequestPromises = urls.map(fetchData);
    return await Promise.all(networkRequestPromises)
      .then((resp) => {
        return resp;
      })
      .catch((e) => {
        return e;
      });
  }
}

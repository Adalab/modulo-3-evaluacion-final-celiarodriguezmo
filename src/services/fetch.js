function getDataApi() {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((dataApi) => console.log(dataApi));
}
export default getDataApi;

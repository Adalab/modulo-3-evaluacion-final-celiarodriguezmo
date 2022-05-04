function getDataApi() {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const dataApiClean = dataApi.map((movie, index) => {
        return {
          id: index,
          audio: movie.audio,
          director: movie.director,
          sentence: movie.full_line,
          name: movie.movie,
          image: movie.poster,
          year: movie.year,
        };
      });
      return dataApiClean;
    });
}
export default getDataApi;

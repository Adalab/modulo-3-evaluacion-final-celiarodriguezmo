import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

import Header from "./Header";
import Form from "./Form";
import MovieList from "./MovieList";
import MovieSceneDetail from "./MovieSceneDetail";

import getDataApi from "../services/fetch";
import objectLS from "../services/localStorage";

function App() {
  const [moviesList, setMoviesList] = useState(objectLS.get("moviesList", []));
  const [movieSearch, setMovieSearch] = useState(
    objectLS.get("searchName", "")
  );
  const [movieYearSearch, setMovieYearSearch] = useState(
    objectLS.get("searchYear", "")
  );

  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        objectLS.set("moviesList", dataFromApi);
        setMoviesList(dataFromApi);
      });
    }
  }, []);

  function inputSearchMovie(inputValue) {
    objectLS.set("searchName", inputValue);
    setMovieSearch(inputValue);
  }

  function inputSearchYear(inputYear) {
    objectLS.set("searchYear", inputYear);
    setMovieYearSearch(inputYear);
  }

  const filterYear = moviesList.filter((movie) => {
    return movieYearSearch === ""
      ? true
      : movie.year === parseInt(movieYearSearch);
  });

  const getYears = () => {
    const arrayYears = moviesList.map((movie) => movie.year);
    const uniqueYears = new Set(arrayYears);
    const years = [...uniqueYears];
    return years;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath("/detalle/:id", pathname);

  //dataPath es el objeto que sacamos con el useLocation que nos da la infor de la ruta en la que hemos pinchado.

  const sceneId = dataPath !== null ? dataPath.params.id : null;

  //con este ternario obtenemos el id de la escena a través del objeto dataPath luego sceneId me lo da la ruta.

  const sceneDetail = moviesList.find(
    (movie) => movie.id === parseInt(sceneId)
  );

  // con este find comparo de las películas iniciales cúal de ellas tiene el mismo id que el id que me da la ruta del datapath

  const returnListSearch = () => {};

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <Header />
            <main>
              <Form
                inputSearchMovie={inputSearchMovie}
                movieSearch={movieSearch}
                inputSearchYear={inputSearchYear}
                movieYear={movieYearSearch}
                getYears={getYears()}
              />
              <MovieList
                movies={filterYear}
                movieSearch={movieSearch}
                movieYear={movieYearSearch}
              />
            </main>
          </div>
        }
      />
      <Route
        path='/detalle/:id'
        element={<MovieSceneDetail movie={sceneDetail} />}
      />
    </Routes>
  );
}

export default App;

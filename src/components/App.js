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
  const [valueWow, setValueWow] = useState(0);
  //Uso useffect para pintar los datos de la api una sola vez,  ejecuto la promesa y almaceno los datos en local storage para luego
  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        objectLS.set("moviesList", dataFromApi);
        setMoviesList(dataFromApi);
      });
    }
  }, []);

  //filtro por nombre de la pelicula y almaceno en la variable de estado con los datos del lifting de la hija(inputName), subo este dato a local storage para luego
  function inputSearchMovie(inputValue) {
    objectLS.set("searchName", inputValue);
    setMovieSearch(inputValue);
  }

  //filtro por años y almaceno en la variable de estado con los datos del lifting de la hija (inputYear), subo este dato a local storage para luego
  function inputSearchYear(inputYear) {
    objectLS.set("searchYear", inputYear);
    setMovieYearSearch(inputYear);
  }

  const filterYear = moviesList.filter((movie) => {
    return movieYearSearch === ""
      ? true
      : movie.year === parseInt(movieYearSearch);
  });

  // Obtenemos un array nuevo solo con los años que no se repiten del array de peliculas inicial para eso aplico el metodo set que me devuelve un objeto o conjunto de elementos unico (que convierto en array)

  const getYears = () => {
    const arrayYears = moviesList.map((movie) => movie.year);
    const uniqueYears = new Set(arrayYears);
    const years = [...uniqueYears];
    return years;
  };

  //Empleo pathname de  uselocation que me dice datos sobre la ruta en la que estoy situada
  const { pathname } = useLocation();
  const dataPath = matchPath("/detalle/:id", pathname);

  //dataPath es el objeto que sacamos que nos da la infor de la ruta en la que hemos pinchado.

  const sceneId = dataPath !== null ? dataPath.params.id : null;

  //con este ternario obtenemos el id de la escena a través del objeto dataPath luego sceneId me lo da la ruta.

  const sceneDetail = moviesList.find(
    (movie) => movie.id === parseInt(sceneId)
  );

  // con este find comparo de las películas iniciales cúal de ellas tiene el mismo id que el id que me da la ruta del datapath

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
                valueWow={valueWow}
                setValueWow={setValueWow}
              />
              <MovieList
                movies={filterYear}
                movieSearch={movieSearch}
                movieYear={movieYearSearch}
                valueWow={parseInt(valueWow)}
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

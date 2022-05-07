import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

import Header from "./Header";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";

import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movieYearSearch, setMovieYearSearch] = useState("");

  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        setMoviesList(dataFromApi);
      });
    }
  }, []);
  function inputSearchMovie(inputValue) {
    setMovieSearch(inputValue);
  }
  function inputSearchYear(inputYear) {
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
  const sceneId = dataPath !== null ? dataPath.params.id : null;
  const sceneFound = moviesList.find((movie) => movie.id === sceneId);

  return (
    <Routes>
      <Route
        path='/home'
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
      <Route path='/home/detalle/:id' element={<MovieSceneDetail />} />
    </Routes>
  );
}

export default App;

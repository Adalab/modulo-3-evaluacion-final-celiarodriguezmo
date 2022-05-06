import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Header from "./Header";

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

  return (
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
  );
}

export default App;

import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movieYear, setMovieYear] = useState("");

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
    setMovieYear(inputYear);
  }
  return (
    <div>
      <Header />
      <main>
        <Form
          inputSearchMovie={inputSearchMovie}
          movieSearch={movieSearch}
          inputSearchYear={inputSearchYear}
          movieYear={movieYear}
        />
        <MovieList
          movies={moviesList}
          movieSearch={movieSearch}
          movieYear={movieYear}
        />
      </main>
    </div>
  );
}

export default App;

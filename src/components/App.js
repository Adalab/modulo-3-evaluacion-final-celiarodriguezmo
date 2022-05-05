import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");

  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        setMoviesList(dataFromApi);
      });
    }
  }, []);
  function inputSearchMovie(inputValue) {
    setMovieSearch(inputValue);
    console.log(movieSearch);
  }
  return (
    <div>
      <Header />
      <main>
        <Form inputSearchMovie={inputSearchMovie} movieSearch={movieSearch} />
        <MovieList movies={moviesList} />
      </main>
    </div>
  );
}

export default App;

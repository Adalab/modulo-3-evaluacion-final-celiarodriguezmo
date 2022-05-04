import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        setMoviesList(dataFromApi);
      });
    }
  }, []);

  console.log(moviesList);
  return (
    <>
      <header>
        <h1>Owen Wilson WOW!</h1>
      </header>
      <main>
        <Form />
        <MovieList movies={moviesList} />
      </main>
    </>
  );
}

export default App;

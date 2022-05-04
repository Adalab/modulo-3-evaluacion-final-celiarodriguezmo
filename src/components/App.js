import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Header from "./Header";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (moviesList.length === 0) {
      getDataApi().then((dataFromApi) => {
        setMoviesList(dataFromApi);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Form />
        <MovieList movies={moviesList} />
      </main>
    </div>
  );
}

export default App;

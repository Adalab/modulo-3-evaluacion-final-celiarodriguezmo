import "../styles/App.scss";
import Form from "./Form";
import MovieList from "./MovieList";
import getDataApi from "../services/fetch";
import { useState } from "react";

function App() {
  const [MoviesList, setMoviesList] = useState([]);

  return (
    <>
      <header>
        <h1>Owen Wilson WOW!</h1>
      </header>
      <main>
        <Form />
        <MovieList />
      </main>
    </>
  );
}

export default App;

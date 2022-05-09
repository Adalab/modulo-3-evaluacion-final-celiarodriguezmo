import MovieSceneItem from "./MovieSceneItem";
import "../styles/list.scss";
//import handleError from "../components/handleError";

function MovieList(props) {
  //Uso las props de app para filtrar y pintar los elementos del listado de peliculas

  const elements = props.movies
    .filter((movie) => movie.wowPosition === props.valueWow)

    .filter((movie) =>
      movie.name
        .toLocaleLowerCase()
        .includes(props.movieSearch.toLocaleLowerCase())
    )

    .map((movie) => {
      return (
        <li className='list__element' key={movie.id}>
          <MovieSceneItem movie={movie} />
        </li>
      );
    });

  return (
    <section>
      <ul className='list'>{elements}</ul>
    </section>
  );
}
export default MovieList;

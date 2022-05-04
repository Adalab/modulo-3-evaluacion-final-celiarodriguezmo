import MovieSceneItem from "./MovieSceneItem";
import "../styles/list.scss";

function MovieList(props) {
  const elements = props.movies.map((movie) => {
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

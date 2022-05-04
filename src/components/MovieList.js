import MovieSceneItem from "./MovieSceneItem";

function MovieList(props) {
  const elements = props.movies.map((movie) => {
    return (
      <li key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return (
    <section>
      <ul>{elements}</ul>
    </section>
  );
}
export default MovieList;

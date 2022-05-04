function MovieSceneItem(props) {
  return (
    <>
      <img src={props.movie.image} alt='' />
      <h3>
        {props.movie.name} - {props.movie.year}
      </h3>
      <p>{props.movie.sentence}</p>
    </>
  );
}

export default MovieSceneItem;

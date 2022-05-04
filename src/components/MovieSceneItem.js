import "../styles/scenes.scss";
function MovieSceneItem(props) {
  return (
    <>
      <img className='list__img' src={props.movie.image} alt='' />
      <h3 className='list__title'>
        {props.movie.name} - {props.movie.year}
      </h3>
      <p className='list__sentence'>{props.movie.sentence}</p>
    </>
  );
}

export default MovieSceneItem;

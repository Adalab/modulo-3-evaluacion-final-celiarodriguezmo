import "../styles/scenes.scss";
import wow from "../images/wow-image.png";
import { Link } from "react-router-dom";

function MovieSceneItem(props) {
  return (
    <Link to={`/home/detalle/${props.movie.id}`} target='_blank'>
      <img className='list__img' src={props.movie.image} alt='' />
      <h3 className='list__title'>
        {props.movie.name} - {props.movie.year}
      </h3>
      <p className='list__sentence'>{props.movie.sentence}</p>
      <img className='wow' src={wow} alt='' />
    </Link>
  );
}
export default MovieSceneItem;

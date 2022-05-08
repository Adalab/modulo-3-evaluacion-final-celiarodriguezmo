import "../styles/scenes.scss";
import wow from "../images/wow-image.png";
import { Link } from "react-router-dom";
//uso las props de app para sacar los valores de los elementos que tiene cada pelicula del listado
// uso Link to e interpolo la ruta para que me lleve al detalle de cada escena

function MovieSceneItem(props) {
  return (
    <Link to={`/detalle/${props.movie.id}`} target='_blank'>
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

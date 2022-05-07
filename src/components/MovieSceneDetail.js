import Owen from "../images/Owen.png";
import { Link } from "react-router-dom";
function MovieSceneDetail(props) {
  return (
    <>
      <img src={props.movie.image} alt='' className='list__img' />
      <h2 className='list__title'>{`Título de la película: ${props.movie.name} `}</h2>
      <p className='list__sentence'>{`Frase completa: ${props.movie.sentence} `}</p>
      <p>{`Director: ${props.movie.director} `}</p>
      <a href={props.movie.audio} target='_blank'>
        ¡ Escucha el audio de esta escena !
      </a>
      <Link to={"/"}>
        <img src={Owen} alt='' className='wow' />
      </Link>
    </>
  );
}
export default MovieSceneDetail;

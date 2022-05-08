import Owen from "../images/Owen.png";
import "../styles/detail.scss";
import { Link } from "react-router-dom";
////uso las props de app para sacar los valores de los elementos que tiene el detalle de la escena
//creo un Link to para que me devuelva a la pagina principal
function MovieSceneDetail(props) {
  return (
    <div className='containerDetail'>
      <img
        src={props.movie.image}
        alt='poster'
        title='poster de la película'
        className='detail__img'
      />
      <div className='containter-elementsDetail'>
        <h2 className='detail__title'>{`Película: ${props.movie.name} `}</h2>
        <p className='detail__sentence'>{`Frase completa: ${props.movie.sentence} `}</p>
        <p className='detail__text'>{`Director: ${props.movie.director} `}</p>
        <a
          href={props.movie.audio}
          title='Escucha el audio'
          rel='noreferrer'
          target='_blank'
        >
          ¡ Escucha el audio de esta escena !
        </a>
        <Link to={"/"}>
          <img
            src={Owen}
            alt='volver a homepage'
            title='volver al Inicio'
            className='wow'
          />
        </Link>
      </div>
    </div>
  );
}
export default MovieSceneDetail;

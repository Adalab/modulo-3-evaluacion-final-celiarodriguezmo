import "../styles/form.scss";

function Form(props) {
  //función que controla el input del nombre de la peli, para saber el valor buscado por la usuaria (con ev.target.value)
  //Damos valor a la función que pasa app por props.
  //manejo abajo en el return el valor del input (props.movieSearch).
  function handleInputName(ev) {
    props.inputSearchMovie(ev.target.value);
  }
  //función que controla el select para saber la opcion seleccionada por la usuaria (con ev.target.value)
  //Damos valor a la función que pasa app por props.
  //manejo abajo en el return el valor del input (props.movieYearSearch)
  function handleInputSelect(ev) {
    props.inputSearchYear(ev.target.value);
  }
  //evitamos que se refresque la pagina al dar enter en el formulario
  function handleForm(ev) {
    ev.preventDefault();
  }
  //pinto con un map las opciones del select ejecutando la función getYears que me pasa app por props (es un array con años sin repetir)
  const selectOptions = () => {
    const options = props.getYears.map((year, i) => {
      return (
        <option key={i} value={year}>
          {year}
        </option>
      );
    });
    return options;
  };

  return (
    <form className='form' onSubmit={handleForm}>
      <label className='form__label' htmlFor='inputName'>
        Movie
      </label>
      <input
        className='form__input'
        type='text'
        name='inputName'
        value={props.movieSearch}
        onChange={handleInputName}
      />
      <label className='form__label' htmlFor='inputSelectYear'>
        Year
      </label>
      <select
        className='form__input'
        name='inputSelectYear'
        id='inputSelectYear'
        value={props.movieYearSearch}
        onChange={handleInputSelect}
      >
        <option value=''>Todos</option>
        {selectOptions()}
      </select>
    </form>
  );
}
export default Form;

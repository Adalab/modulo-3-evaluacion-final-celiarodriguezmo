import "../styles/form.scss";

function Form(props) {
  function handleInputName(ev) {
    props.inputSearchMovie(ev.target.value);
  }
  function handleInputSelect(ev) {
    props.inputSearchYear(ev.target.value);
  }
  function handleForm(ev) {
    ev.preventDefault();
  }
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

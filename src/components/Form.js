import "../styles/form.scss";

function Form(props) {
  /*const [inputValue, setInputValue] = useState("");
  const [inputYear, setInputYear] = useState("all");*/
  function handleInputName(ev) {
    //setInputValue(ev.target.value);

    props.inputSearchMovie(ev.target.value);
  }
  function handleInputSelect(ev) {
    //setInputYear(ev.target.value);
    props.inputSearchYear(ev.target.value);
  }
  function handleForm(ev) {
    ev.preventDefault();
  }
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
        value={props.movieYear}
        onChange={handleInputSelect}
      >
        <option value=''>All Years</option>
        <option value='2007'>2007</option>
      </select>
    </form>
  );
}
export default Form;

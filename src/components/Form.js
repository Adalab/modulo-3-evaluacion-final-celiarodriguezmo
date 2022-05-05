import { useState } from "react";
import "../styles/form.scss";
function Form(props) {
  const [inputValue, setInputValue] = useState("");

  function handleInputName(ev) {
    setInputValue(ev.target.value);
    props.inputSearchMovie(inputValue);
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
        value={inputValue}
        onChange={handleInputName}
      />
      <label className='form__label' htmlFor='inputSelectYear'>
        Year
      </label>
      <select className='form__input' name='inputSelectYear' id=''>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
      </select>
    </form>
  );
}
export default Form;

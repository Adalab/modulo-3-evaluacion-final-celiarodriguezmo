import "../styles/form.scss";
function Form() {
  return (
    <form className='form'>
      <label className='form__label' htmlFor=''>
        Movie
      </label>
      <input className='form__input' type='text' />
      <label className='form__label' htmlFor=''>
        Year
      </label>
      <select className='form__input' name='' id=''>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
      </select>
    </form>
  );
}
export default Form;

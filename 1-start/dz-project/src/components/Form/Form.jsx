import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Form({type, text, onClick, placeholder, className}) {
	const submitForm = (event) => {
		event.preventDefault();
	};

	return (
		<form className='form' onSubmit={submitForm}>
			<Input className={className} type={type} placeholder={placeholder}/>
			<Button text={text} onClick={onClick}/>
		</form>
	);
}

export default Form;
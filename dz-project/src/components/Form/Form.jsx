import styles from './Form.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useRef, useState } from 'react';

function Form({type, text, placeholder, className, onSubmit, name}) {
	const inputRef = useRef();

	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSubmit && onSubmit(value)) {
			setValue('');
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} className={className} type={type} placeholder={placeholder} name={name}/>
			<Button text={text}/>
		</form>
	);
}

export default Form;
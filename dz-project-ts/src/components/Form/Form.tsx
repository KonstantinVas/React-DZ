import styles from './Form.module.css';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import type { FormProps } from './Form.props.ts';

function Form({ type, text, placeholder, className, onLoginSubmit, btnClassName, name, ...props }: FormProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const [value, setValue] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (onLoginSubmit && onLoginSubmit(value)) {
			setValue('');
		}
	};

	return (
		<form {...props} className={styles.form} onSubmit={handleSubmit}>
			<Input
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
				ref={inputRef}
				className={className}
				type={type}
				placeholder={placeholder}
				name={name} />
			<Button className={btnClassName}>{text}</Button>
		</form>
	);
}

export default Form;
import styles from './Form.module.css';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import type { FormProps } from './Form.props.ts';

function Form(props: FormProps) {
	const {
		variant,
		onLoginSubmit,
		onSearchSubmit,
		type,
		text,
		placeholder,
		className,
		btnClassName,
		name,
		...restProps
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (variant === 'login') {
			onLoginSubmit(value);
		} else {
			onSearchSubmit(value);
		}

		setValue('');
	};

	return (
		<form {...restProps} className={styles.form} onSubmit={handleSubmit}>
			<Input
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
				ref={inputRef}
				className={className}
				type={type}
				placeholder={placeholder}
				name={name}
			/>
			<Button className={btnClassName}>{text}</Button>
		</form>
	);
}

export default Form;
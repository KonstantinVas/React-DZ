// Input.tsx
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';

function Input({
	type = 'text',
	placeholder = '',
	className = '',
	name,
	value,
	onChange,
	ref,
	...props
}: InputProps) {
	return (
		<input
			{...props}
			ref={ref}
			className={cn(styles.input, className, {
				[styles['input-search']]: type === 'search'
			})}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
		/>
	);
}

export default Input;
import styles from './Input.module.css';
import cn from 'classnames';

function Input({ type, placeholder, className, ref, name, value, onChange }) {
	return (
		<input 
			className={cn(styles[className], {
				[styles['input-search']] : type === 'search'
			})}
			ref={ref}
			type={type} 
			placeholder={placeholder} 
			value={value} 
			onChange={onChange}
			name={name}
		/>    
	);
}


export default Input;
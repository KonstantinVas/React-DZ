import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={cn(styles.button, {
			[styles['btn-login']]: className === 'btn-login'
		})} {...props}>{children}</button>
	);
}

export default Button;
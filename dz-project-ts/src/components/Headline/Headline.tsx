import styles from './Headline.module.css';
import type { HeadlineProps } from './Headline.props';

function Headline({ children, className = '', ...props }: HeadlineProps) {
	return (
		<h1
			{...props}
			className={`${styles.headline} ${className}`}
		>
			{children}
		</h1>
	);
}

export default Headline;
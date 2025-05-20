import styles from './MainContainer.module.css';
import type { MainContainerProps } from './MainContainer.props';

function MainContainer({ children }: MainContainerProps) {
	return (
		<div className={styles['main-container']}>{children}</div>
	);
}

export default MainContainer;
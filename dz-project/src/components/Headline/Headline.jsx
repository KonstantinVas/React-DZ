import styles from './Headline.module.css';

function Headline({title}) {
	return (
		<h1 className={styles.headline}>{title}</h1>
	);
}

export default Headline;
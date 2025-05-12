import styles from './FilmList.module.css';
import Card from '../Card/Card';

function FilmList({films}) {

	return (
		<ul className={styles['film-list']}>
			{[...films].map(el => (
				<Card
					key={el.id} 
					src={el.src}
					title={el.title}
					rating={el.rating}
				/>
			))
			}
		</ul>
	);
}

export default FilmList;
import styles from './FilmList.module.css';
import Card from '../Card/Card.tsx';
import type { FilmListProps } from './FilmList.props.ts';

function FilmList({ films, ...props }: FilmListProps) {

	return (
		<ul {...props} className={styles['film-list']}>
			{[...films].map(film => (
				<Card
					key={film.id}
					id={film.id}
					src={film.src}
					title={film.title}
					rating={film.rating}
				/>
			))
			}
		</ul>
	);
}

export default FilmList;
import styles from './FilmList.module.css';
import Card from '../Card/Card.tsx';
import type { FilmListProps } from './FilmList.props.ts';
import { normalizeFilm } from '../../helpers/normalize-data.ts';

function FilmList({ films, ...props }: FilmListProps) {
	const normalizeFilms = films.map(normalizeFilm);

	return (
		<ul {...props} className={styles['film-list']}>
			{normalizeFilms.map(film => (
				<Card key={film.imdbId} {...film} />
			))
			}
		</ul>
	);
}

export default FilmList;
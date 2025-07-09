import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import Card from '../../components/Card/Card';
import styles from '../../components/FilmList/FilmList.module.css';

export function Favorites() {
	const favorites = useSelector((state: RootState) => state.favorites.films);

	return <ul className={styles['film-list']}>
		{favorites.map(film => (
			<Card key={film.imdbId} {...film} />
		))
		}
	</ul>;
}
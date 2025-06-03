import type { FilmProps } from '../components/FilmList/FilmList.props';

export function normalizeFilm(film: FilmProps) {
	return {
		imdbId: film['#IMDB_ID'],
		title: film['#TITLE'],
		year: film['#YEAR'],
		rating: film['#RANK'],
		poster: film['#IMG_POSTER'],
		actors: film['#ACTORS']
	};
}
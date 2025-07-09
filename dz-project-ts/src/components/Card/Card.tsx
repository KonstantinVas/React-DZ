import styles from './Card.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import type { CardProps } from './Card.props';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';
import type { MouseEvent } from 'react';

function Card({ imdbId, title, rating, ...props }: CardProps) {
	const dispatch = useDispatch<AppDispatch>();
	const favorites = useSelector((state: RootState) => state.favorites.films);
	const isFavorite = favorites.some(film => film.imdbId === imdbId);

	const addFavorites = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(favoritesActions.toggle({ imdbId, title, rating, ...props }));
	};

	return (
		<li className={cn(styles['film-list_item'])} {...props}>
			<Link to={`/film/${imdbId}`}>
				<div className={cn(styles['rating-wrapper'])}>
					<img src="/rating.svg" alt="Иконка рейтинга" />
					<p className={styles.rating}>{rating}</p>
				</div>
				<img src={props.poster} className={styles['image']} alt="Обложка фильма" />
				<div className={cn(styles['film-list_wrapper'])}>
					<h2 className={cn(styles['film-list_title'])}>{title}</h2>
					<button className={cn(styles['film-list_text'], {
						[styles['film-list_text-active']]: isFavorite
					}
					)} onClick={addFavorites}>
						{isFavorite ? 'В избранном' : 'В избранное'}
					</button>
				</div>
			</Link>
		</li >
	);
}

export default Card;
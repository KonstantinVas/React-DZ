import styles from './Card.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import type { CardProps } from './Card.props';

function Card({ imdbId, title, rating, ...props }: CardProps) {

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
					<button className={cn(styles['film-list_text'])}>В избранное</button>
				</div>
			</Link>
		</li>
	);
}

export default Card;
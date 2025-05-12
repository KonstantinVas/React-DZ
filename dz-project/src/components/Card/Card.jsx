import styles from './Card.module.css';
import cn from 'classnames';

function Card({src, title, rating}) {

	return (
		<li className={cn(styles['film-list_item'])}>
			<img src={src} alt="Обложка фильма" />
			<div className={cn(styles['film-list_wrapper'])}>
				<h2 className={cn(styles['film-list_title'])}>{title}</h2>
				<a className={cn(styles['film-list_text'])}>В избранное</a>
			</div>
			<div className={cn(styles['rating-wrapper'])}>
				<img src="/rating.svg" alt="Иконка рейтинга" />
				<p className={styles.rating}>{rating}</p>
			</div>
		</li>
	);
}

export default Card;
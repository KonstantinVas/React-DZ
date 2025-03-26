import './Card.css';

function Card({src, title, rating}) {

	return (
		<li className='film-list_item'>
			<img src={src} alt="Обложка фильма" />
			<div className="film-list_wrapper">
				<h2 className='film-list_title'>{title}</h2>
				<a className='film-list_text'>В избранное</a>
			</div>
			<div className='rating-wrapper'>
				<img src="/rating.svg" alt="Иконка рейтинга" />
				<p className='rating'>{rating}</p>
			</div>
		</li>
	);
}

export default Card;
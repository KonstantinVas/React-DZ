import './FilmList.css';
import Card from '../Card/Card';

function FilmList({films}) {

	return (
		<ul className='film-list'>
			{films.map(el => (
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
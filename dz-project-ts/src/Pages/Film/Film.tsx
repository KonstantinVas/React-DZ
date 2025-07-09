import { useLoaderData } from 'react-router-dom';
import type { CardProps } from '../../components/Card/Card.props';

export function Film() {
	const data = useLoaderData() as {
		short: {
			name: string;
			description: string;
			rating: string;
			image: string;
			imdbid: string;
		}
	};

	const film = data.short;
	return <>
		Фильм - {film.name}
	</>;
}
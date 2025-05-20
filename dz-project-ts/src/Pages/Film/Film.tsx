import { useParams } from 'react-router-dom';

export function Film() {
	const { id } = useParams();
	return <>
		Фильм - {id}
	</>;
}
import type { AppData } from '../../App.props';
import Headline from '../../components/Headline/Headline';
import MainContainer from '../../components/MainContainer/MainContainer';
import Paragraph from '../../components/Paragraph/Paragraph';
import type { FilmProps } from '../../components/FilmList/FilmList.props';
import { useState } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import Form from '../../components/Form/Form';
import axios from 'axios';
import type { IFilmLisStateProps } from './Main.props';

export function Main() {

	const data: AppData = [
		{
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		},
		{
			formSearch: {
				type: 'search',
				text: 'Искать',
				placeholder: 'Введите название'
			},
			formLogin: {
				title: 'Вход',
				type: 'text',
				text: 'Войти',
				placeholder: 'Ваше имя',
				className: 'input',
				name: 'login'
			}
		}
	];

	const [films, setFilm] = useState<FilmProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [searchPerformed, setSearchPerformed] = useState(false);


	const loadData = async (value: string) => {
		setSearchPerformed(true);
		setIsLoading(true);
		try {
			const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=${value}`);
			setFilm(data.description);
		} catch (e) {
			console.error(e);
			setError('Произошла ошибка при загрузке фильмов');
			setFilm([]);
		} finally {
			setIsLoading(false);
		}
	};


	const onSearchSubmit = (query: string) => {
		if (query) {
			loadData(query);
		}
	};

	function FilmListState({ films, isLoading, error, searchPerformed }: IFilmLisStateProps) {
		// Состояние загрузки
		if (isLoading) return <div>Загружаем фильмы...</div>;

		// Ошибка
		if (error) return <div className="error">{error}</div>;

		// Поиск не выполнялся
		if (films === null || !searchPerformed) return null;

		// Поиск выполнен, но ничего не найдено
		if (films.length === 0) return <div>Фильмы не найдены. Попробуйте изменить запрос.</div>;

		// Результаты найдены
		return <FilmList films={films} />;
	}


	return <>
		<MainContainer>
			<Headline>Поиск</Headline>
			<Paragraph text={data[0].text} />
			<Form
				variant='search'
				onSearchSubmit={onSearchSubmit}
				name={data[1].formSearch?.type}
				type={data[1].formSearch?.type}
				text={data[1].formSearch?.text}
				placeholder={data[1].formSearch?.placeholder}
				className={data[1].formLogin?.className}
				btnClassName={'btn-login'}
			/>
		</MainContainer>
		<FilmListState
			films={films}
			isLoading={isLoading}
			error={error}
			searchPerformed={searchPerformed}
		/>
	</>;
}
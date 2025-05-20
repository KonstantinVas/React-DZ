import type { AppData } from '../../App.props';
import Headline from '../../components/Headline/Headline';
import MainContainer from '../../components/MainContainer/MainContainer';
import Paragraph from '../../components/Paragraph/Paragraph';
import type { FilmProps } from '../../components/FilmList/FilmList.props';
import { useState } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import Form from '../../components/Form/Form';

const INITIAL_DATA: FilmProps[] = [
	{
		id: '1',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 324
	},
	{
		id: '2',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 52
	},
	{
		id: '3',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 4
	},
	{
		id: '4',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 369
	},
	{
		id: '5',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 47
	},
	{
		id: '6',
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 22
	}
];

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

	const [films, _setFilm] = useState<FilmProps[]>(INITIAL_DATA);

	return <>
		<MainContainer>
			<Headline>Поиск</Headline>
			<Paragraph text={data[0].text} />
			<Form
				type={data[1].formSearch?.type}
				text={data[1].formSearch?.text}
				placeholder={data[1].formSearch?.placeholder}
				className={data[1].formLogin?.className}
			/>
		</MainContainer>
		<FilmList films={films} />
	</>;
}
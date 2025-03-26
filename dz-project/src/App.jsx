import './App.css';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';
import MainContainer from './components/MainContainer/MainContainer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { useState } from 'react';
import FilmList from './components/FilmList/FilmList';
const INITIAL_DATA = [
	{
		id: 1,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 324
	},
	{
		id: 2,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 52
	},
	{
		id: 3,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 4
	},
	{
		id: 4,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 369
	},
	{
		id: 5,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 47
	},
	{
		id: 6,
		src: '/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png',
		title: 'Black Widow',
		rating: 22
	}
];

function App() {
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		},
		{
			formSearch: {
				type: 'search',
				text: 'Искать',
				onClick() {
					console.log('Нажата');
				},
				placeholder: 'Введите название',
				className: 'input' + ' ' + 'input-search'
			},
			formLogin: {
				type: 'text',
				text: 'Войти в профиль',
				onClick() {
					console.log('Нажата');
				},
				placeholder: 'Ваше имя',
				className: 'input'
			}
		}
	];

	const [films, _setFilm] = useState(INITIAL_DATA);

	return (
		<>
			<Header></Header>
			<MainContainer>
				<Headline title={data[0].title}/>
				<Paragraph text={data[0].text}/>
				<Form 
					type={data[1].formSearch.type} 
					text={data[1].formSearch.text} 
					onClick={data[1].formSearch.onClick}
					placeholder={data[1].formSearch.placeholder}
					className={data[1].formSearch.className}
				/>
			</MainContainer>
			<FilmList films={films}/>
		</>
	);
}

export default App;


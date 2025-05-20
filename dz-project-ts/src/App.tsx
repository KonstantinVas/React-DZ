import './App.css';
import Headline from './components/Headline/Headline.tsx';
import Paragraph from './components/Paragraph/Paragraph.tsx';
import MainContainer from './components/MainContainer/MainContainer.tsx';
import Form from './components/Form/Form.tsx';
import Header from './components/Header/Header.tsx';
import { useContext, useState } from 'react';
import FilmList from './components/FilmList/FilmList.tsx';
import { UserContext } from './context/user.context.js';
import type { FilmProps } from './components/FilmList/FilmList.props.ts';
import type { AppData } from './App.props.ts';
const INITIAL_DATA: FilmProps[] = [
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

	const { login, error } = useContext(UserContext);
	const [films, _setFilm] = useState<FilmProps[]>(INITIAL_DATA);

	const handleLogin = (value: string) => {
		return login(value);
	};

	return (
		<>
			<Header />
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
			<MainContainer>
				<Headline>Вход</Headline>
				{error && <div className="error-message">{error}</div>}
				<Form
					type={data[1].formLogin?.type}
					text={data[1].formLogin?.text}
					placeholder={data[1].formLogin?.placeholder}
					className={data[1].formLogin?.className}
					onLoginSubmit={handleLogin}
					name={data[1].formLogin?.name}
				/>
			</MainContainer>
		</>
	);
}

export default App;


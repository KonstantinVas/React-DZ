import Headline from '../../components/Headline/Headline';
import MainContainer from '../../components/MainContainer/MainContainer';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import type { AppData } from '../../App.props';
import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate();

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
				text: 'Войти в профиль',
				placeholder: 'Ваше имя',
				className: 'input',
				name: 'login'
			}
		}
	];

	const { login, error } = useContext(UserContext);

	const onLoginSubmit = (value: string) => {
		navigate('/');
		return login(value);
	};

	return <>
		<MainContainer>
			<Headline>Вход</Headline>
			{error && <div className="error-message">{error}</div>}
			<Form
				variant='login'
				type={data[1].formLogin?.type}
				text={data[1].formLogin?.text}
				placeholder={data[1].formLogin.placeholder}
				className={data[1].formLogin.className}
				onLoginSubmit={onLoginSubmit} // передаем обработчик
				name={data[1].formLogin.name}
				btnClassName='btn-login'
			/>
		</MainContainer>
	</>;
}
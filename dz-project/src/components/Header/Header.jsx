import './Header.css';

function Header() {
	return (
		<header className='header'>
			<a href="#">
				<img src="/logo.svg" alt="Логотип приложения" />
			</a>
			<div className='header-container'>
				<a href="#">Поиск фильмов</a>
				<a href="#">Мои фильмы</a>
				<a href="#">Войти
					<img className='login' src="/login.svg" alt="Иконка входа в личный кабинет" />
				</a>
			</div>
		</header>
	);
}

export default Header;
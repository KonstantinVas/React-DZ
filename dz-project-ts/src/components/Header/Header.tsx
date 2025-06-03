import styles from './Header.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.tsx';
import { NavLink } from 'react-router-dom';

function Header() {
	const { currentUser, logout } = useContext(UserContext);

	let loginOrLogout = <>
		<NavLink to={'/auth/login'} className={styles['login-btn']}>Войти</NavLink>
		<img className={styles.login} src="/login.svg" alt="Иконка входа в личный кабинет" />
	</>;
	if (currentUser) {
		loginOrLogout = <>
			<span className={styles.username}>{currentUser.name}</span>
			<img className={styles.login} src="/user.svg" alt="Иконка вошедшева пользователя" />
			<button onClick={logout} className={styles['logout-btn']}>Выйти</button>
		</>;
	}

	return (
		<header className={styles.header}>
			<NavLink to={'/'}>
				<img src="/logo.svg" alt="Логотип приложения" />
			</NavLink>
			<div className={styles['header-container']}>
				<NavLink to={'/'}>Поиск фильмов</NavLink>
				<NavLink to={'/favorites'}>Мои фильмы</NavLink>
				<div className={styles['auth-section']}>
					{loginOrLogout}
				</div>
			</div>
		</header>
	);
}

export default Header;
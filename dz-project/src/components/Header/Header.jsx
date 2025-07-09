import styles from './Header.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context'; 

function Header() {
	const { currentUser, logout } = useContext(UserContext);

	let loginOrLogout = <>
		<button className={styles['login-btn']}>Войти</button>
		<img className={styles.login} src="/login.svg" alt="Иконка входа в личный кабинет" />
	</>;
	if(currentUser) {
		loginOrLogout = <>
			<span className={styles.username}>{currentUser.name}</span>
			<img className={styles.login} src="/user.svg" alt="Иконка вошедшева пользователя" />
			<button onClick={logout} className={styles['logout-btn']}>Выйти</button>
		</>;
	}

	return (
		<header className={styles.header}>
			<a href="#">
				<img src="/logo.svg" alt="Логотип приложения" />
			</a>
			<div className={styles['header-container']}>
				<a href="#">Поиск фильмов</a>
				<a href="#">Мои фильмы</a>
				<div className={styles['auth-section']}>
					{loginOrLogout}
				</div>
			</div>
		</header>
	);
}

export default Header;
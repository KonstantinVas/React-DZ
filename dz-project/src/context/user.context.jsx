import { createContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';

export const UserContext = createContext({
	currentUser: null,
	login: () => {},
	logout: () => {},
	error: null
});

export function UserContextProvider ({children}) {
	const [users, setUsers] = useLocalStorage('dataUser', []);
	const [error, setError] = useState('');

	const currentUser = users.find(user => user.isLogined);

	const login = (userName) => {
		const trimUserName = userName.trim();
		
		if (!trimUserName || trimUserName.length < 3) {
			setError(!trimUserName 
				? 'Имя пользователя не может быть пустым' 
				: 'Имя должно содержать минимум 3 символа');
			return false;
		}
    
		setError(null);

		const existingUserIndex = users.findIndex(user => user.name === trimUserName);
    
		let updatedUsers;
    
		if(existingUserIndex >= 0) {
			updatedUsers = users.map(user => ({
				...user,
				isLogined: user.name === trimUserName
			}));
		} else {
			updatedUsers = [
				...users.map(user => ({...user, isLogined: false})),
				{
					name: trimUserName,
					isLogined: true,
					id: users.length > 0 ? Math.max(...users.map(i => i.id)) + 1 : 1
				}
			];
		}

		setUsers(updatedUsers);
        
		return true;
	};
    
	const logout = () => {
		const updatedUsers = users.map(user => ({
			...user,
			isLogined: false
		}));
		setUsers(updatedUsers);
	};

	return <UserContext.Provider value={{
		currentUser,
		login,
		logout,
		error
	}}>
		{children}
	</UserContext.Provider>;
};
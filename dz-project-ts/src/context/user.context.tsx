import { createContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/use-localstorage.hook.ts';
import type { User, UserContextProviderProps, UserContextType } from './user.context.props';

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	login: () => false,
	logout: () => { },
	error: null
});

export function UserContextProvider({ children }: UserContextProviderProps) {
	const [users, setUsers] = useLocalStorage<User[]>('dataUser', []);
	const [error, setError] = useState<string | null>(null);

	const currentUser = users.find((user: User) => user.isLogined) ?? null;

	const login = (userName: string) => {
		const trimUserName = userName.trim();

		if (!trimUserName || trimUserName.length < 3) {
			setError(!trimUserName
				? 'Имя пользователя не может быть пустым'
				: 'Имя должно содержать минимум 3 символа');
			return false;
		}

		setError(null);

		const existingUserIndex = users.findIndex((user: User) => user.name === trimUserName);

		let updatedUsers;

		if (existingUserIndex >= 0) {
			updatedUsers = users.map((user: User) => ({
				...user,
				isLogined: user.name === trimUserName
			}));
		} else {
			updatedUsers = [
				...users.map((user: User) => ({ ...user, isLogined: false })),
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
		const updatedUsers = users.map((user: User) => ({
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
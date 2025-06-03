import { useContext, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const { currentUser } = useContext(UserContext); // Получаем текущего пользователя из контекста


	if (!currentUser) {
		return <Navigate to='/auth/login' replace />;
	};
	return children;
};
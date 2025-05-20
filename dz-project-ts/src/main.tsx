import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Main } from './Pages/Main/Main';
import { Login } from './Pages/Login/Login';
import { Favorites } from './Pages/Favorites/Favorites';
import { Film } from './Pages/Film/Film';
import { UserContextProvider } from './context/user.context';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/movie/:id',
				element: <Film />
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Main } from './Pages/Main/Main';
import { Login } from './Pages/Login/Login';
import { Favorites } from './Pages/Favorites/Favorites';
import { Film } from './Pages/Film/Film';
import axios from 'axios';
// import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
{/* <RequireAuth></RequireAuth> */ }

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
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/film/:id',
				element: <Film />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					const { data } = await axios.get(`https://search.imdbot.workers.dev/?tt=${params.id}`);
					return data;
				}
			}
		]
	},
	{
		path: '/auth',
		element: <Layout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);

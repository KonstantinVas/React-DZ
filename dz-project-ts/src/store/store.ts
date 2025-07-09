import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer, { PERSISTENT_STATE } from './favorites.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		favorites: favoritesReducer
	}
});

store.subscribe(() => {
	saveState(store.getState().favorites, PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
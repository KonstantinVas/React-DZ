import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const PERSISTENT_STATE = 'favoritesData';

export interface IFilmsItem {
	imdbId: string
	title: string;
	year: number;
	rating: number;
	poster: string;
	actors: string;
}

export interface IFilmsState {
	films: IFilmsItem[];
}

const initialState: IFilmsState = loadState<IFilmsState>(PERSISTENT_STATE) ?? {
	films: []
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggle: (state, action) => {
			const index = state.films.findIndex(film => film.imdbId === action.payload.imdbId);
			if (index === -1) {
				state.films.push(action.payload);
			} else {
				state.films.splice(index, 1);
			}
		}
	}
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions; 
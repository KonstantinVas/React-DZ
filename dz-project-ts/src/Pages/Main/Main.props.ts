import type { FilmProps } from '../../components/FilmList/FilmList.props';

export interface IFilmLisStateProps {
    films: FilmProps[] | null;
    isLoading: boolean;
    error: string | null;
    searchPerformed: boolean;
}
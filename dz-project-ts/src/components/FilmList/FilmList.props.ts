import type { HTMLAttributes } from 'react';

export interface FilmProps {
    id: string;
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#RANK': number;
    '#ACTORS': string;
    '#AKA'?: string; // Делаем опциональным
    '#IMDB_URL': string;
    '#IMDB_IV'?: string; // Делаем опциональным
    '#IMG_POSTER': string;
    photo_width?: number; // Делаем опциональным
    photo_height?: number; // Делаем опциональным
}

export interface FilmListProps extends HTMLAttributes<HTMLUListElement> {
    films: FilmProps[];
}


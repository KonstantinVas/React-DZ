import type { HTMLAttributes } from 'react';

export interface FilmProps {
    id: string;
    src: string;
    title: string;
    rating: number;
}

export interface FilmListProps extends HTMLAttributes<HTMLUListElement> {
    films: FilmProps[];
}


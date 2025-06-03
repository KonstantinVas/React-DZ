import type { LiHTMLAttributes } from 'react';

export interface CardProps extends LiHTMLAttributes<HTMLElement> {
    imdbId: string
    title: string;
    year: number;
    rating: number;
    poster: string;
    actors: string;
}
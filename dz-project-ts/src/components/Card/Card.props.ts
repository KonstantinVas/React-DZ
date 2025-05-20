import type { LiHTMLAttributes } from 'react';

export interface CardProps extends LiHTMLAttributes<HTMLElement> {
    id: string,
    src: string;
    title: string;
    rating: number;
}
import type { HTMLAttributes, ReactNode } from 'react';

export interface MainContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
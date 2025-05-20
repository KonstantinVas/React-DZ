import type { ReactNode } from 'react';

export interface UserContextProviderProps {
    children: ReactNode;
}

export interface User {
    id: number;
    name: string;
    isLogined: boolean;
}

export interface UserContextType {
    currentUser: User | null;
    login: (userName: string) => boolean;
    logout: () => void;
    error: string | null;
}
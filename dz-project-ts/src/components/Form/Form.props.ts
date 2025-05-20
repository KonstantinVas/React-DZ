import type { HTMLAttributes } from 'react';

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
    type?: string;
    text?: string;
    placeholder?: string;
    onLoginSubmit?: (value: string) => boolean;
    className?: string;
    name?: string;
    btnClassName: string;
}


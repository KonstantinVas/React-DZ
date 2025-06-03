import type { HTMLAttributes } from 'react';

type BaseFormProps = HTMLAttributes<HTMLFormElement> & {
    placeholder: string;
    className: string;
    btnClassName: string;
    name: string;
    type: string;
    text: string;
};


type LoginFormProps = BaseFormProps & {
    variant: 'login';
    onLoginSubmit: (value: string) => boolean;
    onSearchSubmit?: never;
};

type SearchFormProps = BaseFormProps & {
    variant: 'search';
    onSearchSubmit: (query: string) => void;
    onLoginSubmit?: never;
};

export type FormProps = LoginFormProps | SearchFormProps;
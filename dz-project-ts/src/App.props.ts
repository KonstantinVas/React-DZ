export type TextData = {
    text: string;
}

type FormSearch = {
    type: string;
    text: string;
    placeholder: string;
};

type FormLogin = {
    title: string;
    type: string;
    text: string;
    placeholder: string;
    className: string;
    name: string;
};

export type FormData = {
    formSearch: FormSearch;
    formLogin: FormLogin;
};

export type AppData = [TextData, FormData];
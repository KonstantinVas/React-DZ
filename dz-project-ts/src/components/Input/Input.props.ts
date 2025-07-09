// Input.props.ts
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    name?: string;
    className?: string;
    value?: string;
    ref?: React.Ref<HTMLInputElement>;
}
import { InputHTMLAttributes } from 'react'

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: string;
    type: 'text' | 'password' | 'email' | 'number';
    id: string;
    placeholder: string
  }
  
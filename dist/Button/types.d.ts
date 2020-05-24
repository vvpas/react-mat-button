import React from 'react';
import { MatColorVariant } from './matColors';
export declare type ButtonVariant = 'text' | 'outline' | 'solid' | 'link';
export declare type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export declare type ColorVariant = 'primary' | 'secondary' | 'accent' | 'warning' | 'danger' | 'default' | MatColorVariant;
export interface StyledButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    colorVariant: ColorVariant;
    size: ButtonSize;
    disabled: boolean;
    loading: boolean;
}
export interface ButtonProps extends StyledButtonProps {
}

import React from 'react'
import { MatColorVariant } from './matColors'

export type ButtonVariant = 'text' | 'outline' | 'solid' | 'link'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'warning'
  | 'danger'
  | 'default'
  | MatColorVariant
export interface StyledButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  colorVariant: ColorVariant
  size: ButtonSize
  disabled: boolean
  loading: boolean
}

export interface ButtonProps extends StyledButtonProps {}

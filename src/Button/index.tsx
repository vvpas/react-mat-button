import React from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  colorVariant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <StyledButton
      className={`vv-btn vv-btn-${variant} vv-btn-color-${colorVariant}`}
      size={size}
      disabled={disabled}
      loading={loading}
      variant={variant}
      colorVariant={colorVariant}
      {...props}
    >
      <React.Fragment>
        {loading && <div className='vv-btn-loading' />}
        {children}
      </React.Fragment>
    </StyledButton>
  )
}

export default Button

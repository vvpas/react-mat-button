import styled, { css } from 'styled-components'
import { getMatColor, MatColorShades, MatColorVariants } from './matColors'
import { StyledButtonProps } from './types'
import { getColorByVariant } from './utils'

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  box-shadow: none;
  padding: unset;
  color: #fff;
  transition: all .5s ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @keyframes anim-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > .vv-btn-loading {
    display: inline-block;
    color: currentcolor;
    width: 1em;
    height: 1em;
    vertical-align: bottom;
    margin-right: 6px;
    border-width: 2px;
    border-color: currentcolor currentcolor transparent transparent;
    border-style: solid;
    border-radius: 9999px;
    animation: 0.65s linear 0s infinite normal none running anim-rotate;
  }

  ${({ variant }) =>
    variant !== 'link' &&
    `
    border-radius: 3px;
  `}

  ${({ disabled, variant, colorVariant }) =>
    disabled !== true &&
    variant !== 'link' &&
    css`
      ${
        (variant === 'outline' || variant === 'solid') &&
        `
          border: 1px solid ${getColorByVariant(
            colorVariant,
            MatColorShades.S200
          )};
        `
      }

    ${
      (variant === 'outline' || variant === 'text') &&
      `
        color: ${getColorByVariant(colorVariant, MatColorShades.S500)};
        &:hover {
          background: ${getColorByVariant(colorVariant, MatColorShades.S50)};
        }
      `
    }

    ${
      variant === 'outline' &&
      `
        &:hover {
          border: 1px solid ${getColorByVariant(
            colorVariant,
            MatColorShades.S500
          )};
        }
      `
    }

    ${
      variant === 'solid' &&
      colorVariant !== 'default' &&
      `
        background: ${getColorByVariant(colorVariant, MatColorShades.S500)};
        &:hover {
          background: ${getColorByVariant(colorVariant, MatColorShades.S700)};
        }
      `
    }

    ${
      variant === 'solid' &&
      colorVariant === 'default' &&
      `
        background: ${getColorByVariant(colorVariant, MatColorShades.S200)};
        &:hover {
          background: ${getColorByVariant(colorVariant, MatColorShades.S400)};
        }
      `
    }

    ${
      colorVariant === 'default' &&
      `
        color: #212121;
      `
    }
  `}

  ${({ disabled, variant }) =>
    disabled !== true &&
    variant === 'link' &&
    `
    color: ${getMatColor(MatColorVariants.BLUE, MatColorShades.S700)};
    &:hover {
      text-decoration: underline;
    }
  `}

  ${({ disabled, variant }) =>
    disabled === true &&
    css`
      color: rgba(0, 0, 0, 0.26);
      ${(variant === 'solid' || variant === 'outline') &&
      `
        border: 1px solid rgba(0, 0, 0, 0.15);
      `}
      ${variant === 'solid' &&
      `
        background: rgba(0, 0, 0, 0.12);
      `}
    `}

  ${({ size }) =>
    size === 'xs' &&
    `
    padding: 3px 8px;
    font-size: 0.625rem;
    font-weight: 500;
  `}

  ${({ size }) =>
    size === 'sm' &&
    `
    padding: 4px 12px;
    font-size: 0.75rem;
    font-weight: 500;
  `}
  
  ${({ size }) =>
    size === 'md' &&
    `
    padding: 8px 16px;
    font-size: 0.8125rem;
    font-weight: 500;
  `}

  ${({ size }) =>
    size === 'lg' &&
    `
    padding: 16px 24px;
    font-size: 0.9375rem;
    font-weight: 800;
    text-transform: uppercase;
  `}

  ${({ disabled }) =>
    disabled === true &&
    `
    cursor: not-allowed;
  `}

  ${({ loading, size }) =>
    loading === true &&
    css`
      opacity: 0.5;
      cursor: progress;
      ${size === 'xs' &&
      `
        & > .vv-btn-loading {
          width: 0.6em;
          height: 0.6em;
        }
      `}
      ${size === 'sm' &&
      `
        & > .vv-btn-loading {
          width: 0.8em;
          height: 0.8em;
        }
      `}
    `}
`

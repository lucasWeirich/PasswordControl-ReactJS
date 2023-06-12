import { transparentize } from "polished"
import { styled } from "styled-components"

const COLORS = {
  primary: '#0099FF',
  secondary: '#3a3a38',
  danger: '#F84735',
  alert: '#e19206',
}

const THEME = {
  primary: {
    bg: COLORS.primary,
    color: '#fff',
    onHover: `
      box-shadow: 5px 5px 10px -5px ${transparentize(0.10, COLORS.primary)};
    `,
  },
  secondary: {
    bg: COLORS.secondary,
    color: '#fff',
    onHover: `
      box-shadow: 5px 5px 10px -5px ${transparentize(0.10, COLORS.secondary)};
    `,
  },
  danger: {
    bg: COLORS.danger,
    color: '#fff',
    onHover: `
      box-shadow: 5px 5px 10px -5px ${transparentize(0.10, COLORS.danger)};
    `,
  },
  alert: {
    bg: COLORS.alert,
    color: '#fff',
    onHover: `
      box-shadow: 5px 5px 10px -5px ${transparentize(0.10, COLORS.alert)};
    `,
  },
}

export const Wrapper = styled.button<{
  variant: 'primary' | 'secondary' | 'danger' | 'alert'
  varianthover?: 'primary' | 'secondary' | 'danger' | 'alert'
}>`
  padding: 10px 20px;
  border: 1px solid ${p => THEME[p.variant].bg};
  color: ${p => THEME[p.variant].color};
  background: ${p => THEME[p.variant].bg};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    ${p => THEME[p.variant].onHover}
    ${p => p.varianthover && `
      background: ${transparentize(0.20, COLORS[p.varianthover])};
      box-shadow: 5px 5px 10px -5px ${transparentize(0.40, COLORS[p.varianthover])};
      border-color: transparent;
    `}
  }

  &:disabled {
    cursor: default;
    
    &:hover {
      opacity: 0.5;
    }
  }

  &:active:not(:disabled) {
    scale: 0.9;
  }
`
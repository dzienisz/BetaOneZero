import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { SpaceProps } from 'styled-system'

export const sizes = {
  SM: 'sm',
  MD: 'md'
} as const

export enum buttonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const

export type Sizes = typeof sizes[keyof typeof sizes]
export type Variants = typeof variants[keyof typeof variants]

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps

export type ButtonProps = {
  variant?: Variants
  size?: Sizes
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  as?: 'a' | 'button' | typeof Link
  href?: string
  external?: boolean
  isLoading?: boolean
  disabled?: boolean
  white?: boolean,
  backgroundColor?: string
} & ButtonTypes &
  SpaceProps

export type ButtonThemeVariant = {
  background: string
  backgroundHover: string
  backgroundDisabled: string
  color: string
  colorDisabled: string
}

export type ButtonTheme = {
  [key in Variants]: ButtonThemeVariant
}

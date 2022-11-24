import { TypographyProps, SpaceProps, ColorProps, LayoutProps } from 'styled-system'

export enum TextVariant {
  H1 = 'heading1',
  H2 = 'heading2',
  H3 = 'heading3',
  H4 = 'heading4',
  H5 = 'heading5',
  BODY_BIG = 'bodyBig',
  BODY_BIG_BOLD = 'bodyBigBold',
  BODY_BIG_MEDIUM = 'bodyBigMedium',
  BODY_DEFAULT = 'bodyDefault',
  BODY_DEFAULT_BOLD = 'bodyDefaultBold',
  BODY_DEFAULT_MEDIUM = 'bodyDefaultMedium',
  BODY_SMALL = 'bodySmall',
  BODY_SMALL_BOLD = 'bodySmallBold',
  BODY_SMALL_MEDIUM = 'bodySmallMedium',
  TEXT_XS_REGULAR = 'textXsRegular',
  TEXT_XS_MEDIUM = 'textXsMedium',
  TEXT_XS_BOLD = 'textXsBold',
  CAPTION = 'caption',
  TRIMMED = 'trimmed',
  HIGHLIGHTED = 'highlighted'
}

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'

export type TextThemeVariant = {
  fontFamily?: string
  fontSize?: string
  lineHeight?: string
  textTransform?: TextTransform
  letterSpacing?: string
  overflow?: string
  display?: string
  WebkitBoxOrient?: 'horizontal' | 'vertical' | 'inline-axis' | 'block-axis' | 'inherit'
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word'
  backgroundImage?: string
  '-webkit-background-clip'?: string
  '-webkit-text-fill-color'?: string
}

export interface CommonTextProps extends SpaceProps, TypographyProps, ColorProps, LayoutProps {
  variant?: TextVariant
  textTransform?: TextTransform
  hoverColor?: string
  clickable?: boolean
}

export type ConditionalTextProps =
  | {
      isTrimmed: boolean
      linesToDisplay: number
    }
  | {
      isTrimmed?: never
      linesToDisplay?: never
    }

export type TextProps = CommonTextProps & ConditionalTextProps

export type TextTheme = {
  [key in TextVariant]: TextThemeVariant
}

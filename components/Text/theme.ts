import { TextVariant, TextTheme } from './types'

export const defaultTheme: TextTheme = {
  [TextVariant.TEXT_XS_REGULAR]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '12px',
    lineHeight: '16px'
  },
  [TextVariant.TEXT_XS_MEDIUM]: {
    fontFamily: 'BiennaleMedium',
    fontSize: '12px',
    lineHeight: '16px'
  },
  [TextVariant.BODY_SMALL]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '14px',
    lineHeight: '22px'
  },
  [TextVariant.BODY_SMALL_BOLD]: {
    fontFamily: 'BiennaleBold',
    fontSize: '14px',
    lineHeight: '22px'
  },
  [TextVariant.BODY_SMALL_MEDIUM]: {
    fontFamily: 'BiennaleMedium',
    fontSize: '14px',
    lineHeight: '22px'
  },
  [TextVariant.BODY_DEFAULT]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_DEFAULT_BOLD]: {
    fontFamily: 'BiennaleBold',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_DEFAULT_MEDIUM]: {
    fontFamily: 'BiennaleMedium',
    fontSize: '16px',
    lineHeight: '26px'
  },
  [TextVariant.BODY_BIG]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.BODY_BIG_BOLD]: {
    fontFamily: 'BiennaleBold',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.BODY_BIG_MEDIUM]: {
    fontFamily: 'BiennaleMedium',
    fontSize: '18px',
    lineHeight: '31px'
  },
  [TextVariant.H1]: {
    fontFamily: 'BiennaleBold',
    fontSize: '72px',
    lineHeight: '83px'
  },
  [TextVariant.H2]: {
    fontFamily: 'BiennaleBold',
    fontSize: '64px',
    lineHeight: '74px'
  },
  [TextVariant.H3]: {
    fontFamily: 'BiennaleBold',
    fontSize: '48px',
    lineHeight: '55px'
  },
  [TextVariant.H4]: {
    fontFamily: 'BiennaleBold',
    fontSize: '32px',
    lineHeight: '37px'
  },
  [TextVariant.H5]: {
    fontFamily: 'BiennaleBold',
    fontSize: '24px',
    lineHeight: '31px'
  },
  [TextVariant.CAPTION]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '18px',
    lineHeight: '31px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase'
  },
  // Additional styles applied when isTrimmed prop is passed
  // Don't recommended to use as a variant itself as it doesn't have additional styling
  [TextVariant.TRIMMED]: {
    overflow: 'hidden',
    display: '-webkit-inline-box',
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-all'
  },
  [TextVariant.TEXT_XS_REGULAR]: {
    fontFamily: 'BiennaleRegular',
    fontSize: '12px',
    lineHeight: '130%'
  },
  [TextVariant.TEXT_XS_MEDIUM]: {
    fontFamily: 'BiennaleMedium',
    fontSize: '12px',
    lineHeight: '130%'
  },
  [TextVariant.TEXT_XS_BOLD]: {
    fontFamily: 'BiennaleBold',
    fontSize: '12px',
    lineHeight: '100%'
  },
  [TextVariant.HIGHLIGHTED]: {
    backgroundImage:
      '-webkit-linear-gradient(66.11deg, #fc4f91 10.45%, #c857b9 25.48%,#7763f6 49.21%,#5387ed 61.07%,#1fbddf 80.06%,#0ad2da 89.55%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  }
}

import styled from 'styled-components'
import {compose, typography, space, color, system, layout} from 'styled-system'
import {TextProps, TextVariant} from './types'
import {defaultTheme} from './theme'

const getTextVariantStyles = (variant?: TextVariant) =>
	variant ? defaultTheme[variant] : {}
const getTextTrimmedStyles = (isTrimmed?: boolean) =>
	isTrimmed ? defaultTheme[TextVariant.TRIMMED] : {}

export const TextBase = styled.div<TextProps>`
	color: white;
	font-family: 'BiennaleRegular';
	font-size: 16px;
	line-height: 26px;
	-webkit-line-clamp: ${({linesToDisplay}) => linesToDisplay};

	&:hover {
		color: ${({hoverColor}) => hoverColor};
		cursor: ${({clickable}) => (clickable ? 'pointer' : 'default')};
	}

	${compose(typography, space, color, layout)}
	${system({
		textTransform: {
			property: 'textTransform',
			scale: 'textTransforms',
			defaultScale: [
				'none',
				'uppercase',
				'lowercase',
				'capitalize',
				'full-width',
				'full-size-kana',
			],
		},
	})}
`

export const Text = styled(TextBase)<TextProps>(
	({variant = TextVariant.BODY_DEFAULT, isTrimmed}) => ({
		...getTextVariantStyles(variant),
		...getTextTrimmedStyles(isTrimmed),
	}),
)

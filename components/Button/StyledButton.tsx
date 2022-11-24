import styled, {DefaultTheme} from 'styled-components'
import {space} from 'styled-system'
import {ButtonProps, ButtonThemeVariant, variants} from './types'

type ThemedProps = {
	theme: DefaultTheme
} & ButtonProps

const getDisabledStyles = ({
	isLoading,
	theme,
	variant = variants.PRIMARY,
}: ThemedProps) => {
	if (isLoading === true) {
		return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `
	}

	return `
    &:disabled,
    &.button--disabled {
      background: gray;
      color: black;
      cursor: not-allowed;
    }
  `
}

const removePointerEvents = ({disabled, as}: ThemedProps) => {
	if (disabled && as && as !== 'button') {
		return `
      pointer-events: none;
    `
	}

	return ''
}

const StyledButton = styled.button<ButtonProps>`
	align-items: center;
	background: ${({backgroundColor}) => backgroundColor};
	border: 0;
	border-radius: 8px;
	color: ${({color = 'black'}) => color};;
	cursor: pointer;
	display: inline-flex;
	font-family: BiennaleBold;
	font-size: 16px;
	/* max-content instead of auto for Safari fix */
	width: ${({fullWidth}) => (fullWidth ? '100%' : 'max-content')};
	height: ${({size}) => (size === 'sm' ? '40px' : '56px')};
	line-height: 1;
	letter-spacing: 0.03em;
	justify-content: center;
	outline: 0;
	padding: ${({size}) => (size === 'sm' ? '0 16px' : '0 32px')};
	opacity: ${({isLoading}) => (isLoading ? 0.5 : 1)};

	&:hover:not(:disabled):not(.button--disabled):not(:active) {
		background: black
    color: white;
	}

	${getDisabledStyles}
	${removePointerEvents}
  ${space}
`

StyledButton.defaultProps = {
	fullWidth: false,
	type: 'button',
}

export default StyledButton

import React from 'react'
import StyledButton from './StyledButton'
import {ButtonProps, variants, sizes} from './types'

const Button: React.FC<ButtonProps> = ({
	startIcon,
	style,
	endIcon,
	children,
	external,
	isLoading,
	disabled,
	white,
	...props
}) => {
	const isDisabled = isLoading || disabled

	return (
		<StyledButton
			{...props}
			isLoading={isLoading}
			disabled={isDisabled}
			style={style}
			white={white}
		>
			{children}
		</StyledButton>
	)
}

Button.defaultProps = {
	variant: variants.PRIMARY,
	size: sizes.MD,
	external: false,
	isLoading: false,
	disabled: false,
}

export default Button

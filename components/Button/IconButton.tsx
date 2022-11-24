import styled from 'styled-components'
import Button from './Button'
import {ButtonProps} from './types'

const IconButton = styled(Button)<ButtonProps>`
	padding: 0px 8px;
	width: ${({size}) => (size === 'sm' ? '40px' : '56px')};
`

export default IconButton

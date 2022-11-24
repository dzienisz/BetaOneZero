import styled from 'styled-components'
import {flexbox} from 'styled-system'
import Box from './Box'
import {FlexProps} from './types'

const Flex = styled(Box)<FlexProps>`
	display: flex;
	${flexbox}
	${({fullWidth}) =>
		fullWidth &&
		`
        width: 100%;
    `}
  ${({gap}) =>
		gap &&
		`
        gap: ${gap};
    `}
`

export default Flex

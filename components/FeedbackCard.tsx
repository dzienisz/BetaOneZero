import * as React from 'react'
import styled from 'styled-components'
import {Text, TextVariant} from './Text'

const CardWrapper = styled.div`
	cursor: pointer;
	padding: 20px;
	background: #b19ab1;
	border-radius: 16px;
	&:hover {
		background: #b58cb5;
	}
	transition: all 0.5s ease-in-out;
`

interface IFeedbackCardProps {
	onVote: () => void
	feedbackData: string
	alreadyVoted: boolean
}

const FeedbackCard: React.FunctionComponent<IFeedbackCardProps> = ({
	onVote,
	feedbackData,
	alreadyVoted,
}) => {
	console.log(alreadyVoted)
	return (
		<CardWrapper onClick={() => onVote()}>
			<Text variant={TextVariant.BODY_DEFAULT_BOLD} clickable>
				{' '}
				{feedbackData}
			</Text>
			{alreadyVoted && <Text fontSize={'8px'}>Already voted!</Text>}
		</CardWrapper>
	)
}

export default FeedbackCard

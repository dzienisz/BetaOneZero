import React, {useEffect, useMemo, useState} from 'react'
import {useEthers, Polygon, useConnector} from '@usedapp/core'
import {Box, ButtonBase, Grid, Input, StepButton} from '@mui/material'
import styled from 'styled-components'
import {Flex} from 'components/Box'
import {Text, TextVariant} from 'components/Text'
import {Button} from 'components/Button'
import FeedbackCard from 'components/FeedbackCard'
import metadata from '../metadata.json'
import ApiPromise from '@polkadot/api/promise'
import {ContractPromise} from '@polkadot/api-contract'

// initialise via static create

function shortenText(text: string, firstChars = 4, lastChars = 4): string {
	const textLength = text.length
	if (textLength <= firstChars + lastChars) return text
	return `${text.substring(0, firstChars)}...${text.substring(
		textLength - lastChars,
	)}`
}

const getVotes = async () => {
	const api = await ApiPromise.ApiPromise.create()
	const VOTE_CONTRACT =
		'0x1ffa3dd6aaf5399663af8d7cee1f40045b4bf3aee92ca0540c5581c28ee08222'
	// The address is the actual on-chain address as ss58 or AccountId object.
	const contract = new ContractPromise(api, metadata, VOTE_CONTRACT)
}

const MainWrapper = styled.div`
	background-color: #919d71;
	height: 100vh;
	width: 100vw;
`

const AccountAddress = styled.div`
	color: white;
`

const TopBarComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	background: #5d9d77;
`

const VoteFormWrapper = styled(Flex)`
	padding: 30px;
	justify-content: space-between;
`

const FeedbackInput = styled.input`
	height: 40px;
	widht: 50%;
`

export default function Home() {
	const {
		account,
		isLoading,
		library,
		deactivate,
		switchNetwork,
		active,
	} = useEthers()
	const connector = useConnector()
	const [loggingIn, setLoggingIn] = useState(false)
	const [feedback, setFeedback] = useState('')
	const [feedbacks, setFeedbacks] = useState<string[]>([])
	const [votesLeft, setVotesLeft] = useState(20)
	const [votedFeeds, setVotedFeeds] = useState<string[]>([])
	const [authorizing, setAuthorizing] = useState(false)

	// useEffect(() => {
	// 	getVotes()
	// }, [])

	const userLogged = account && !loggingIn

	return (
		<MainWrapper>
			<TopBarComponent>
				{userLogged ? (
					<Button size='sm' color='gray' onClick={() => deactivate()}>
						Log out
					</Button>
				) : (
					<Button
						color='black'
						size='sm'
						onClick={async () => {
							setLoggingIn(true)
							setAuthorizing(true)
							await new Promise<void>(res => {
								setTimeout(() => {
									connector.activateBrowserWallet()
									res()
								}, 1000)
							})
							setAuthorizing(false)
							setLoggingIn(false)
						}}
					>
						{loggingIn ? 'Logging in...' : 'Connect'}
					</Button>
				)}
				{account && (
					<Text variant={TextVariant.BODY_BIG_MEDIUM}>
						Hi {shortenText(account, 10, 10)}!
					</Text>
				)}
			</TopBarComponent>
			{userLogged && !authorizing ? (
				<>
					<VoteFormWrapper>
						<Box flexDirection={'row'}>
							<Input
								multiline
								value={feedback}
								onChange={({target}) => setFeedback(target.value)}
								style={{
									marginRight: 40,
									height: '100%',
								}}
							/>

							<Button
								onClick={() => {
									if (feedback !== '') {
										setFeedbacks([...feedbacks, feedback])
									}
									setFeedback('')
								}}
							>
								{feedback === ''
									? 'Write your feedback'
									: 'Confirm your feedback'}
							</Button>
						</Box>

						<Text variant={TextVariant.BODY_BIG_MEDIUM}>
							Points left: {votesLeft}
						</Text>
					</VoteFormWrapper>
					<VoteFormWrapper>
						<Grid container spacing={'16px'}>
							{feedbacks.map(feed => {
								const alreadyVoted = votedFeeds.includes(feed)
								return (
									<Grid item xs={4} key={feed}>
										<FeedbackCard
											feedbackData={feed}
											alreadyVoted={alreadyVoted}
											onVote={() => {
												if (!alreadyVoted) {
													setVotedFeeds([...votedFeeds, feed])
													setVotesLeft(prev => prev - 1)
												}
											}}
										></FeedbackCard>
									</Grid>
								)
							})}
						</Grid>
					</VoteFormWrapper>
					<VoteFormWrapper>
						<Button
							onClick={() => {
								setFeedbacks([])
								setVotesLeft(20)
							}}
						>
							Refresh votes
						</Button>
					</VoteFormWrapper>
				</>
			) : (
				authorizing && (
					<VoteFormWrapper>Authorizing your company profile</VoteFormWrapper>
				)
			)}
		</MainWrapper>
	)
}

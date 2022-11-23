import React, {useEffect, useMemo} from 'react'
import {useEthers, Polygon, useConnector} from '@usedapp/core'

import styled from 'styled-components'
function shortenText(text: string, firstChars = 4, lastChars = 4): string {
	const textLength = text.length
	if (textLength <= firstChars + lastChars) return text
	return `${text.substring(0, firstChars)}...${text.substring(
		textLength - lastChars,
	)}`
}

const MainWrapper = styled.div`
	background-color: black;
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
	background: red;
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

	return (
		<MainWrapper>
			<TopBarComponent>
				{account ? (
					<button onClick={() => deactivate()}>Log out</button>
				) : (
					<button
						onClick={() => {
							connector.activateBrowserWallet()
						}}
					>
						Connect
					</button>
				)}
				{account && (
					<AccountAddress color='white'>
						Hi {shortenText(account)}!
					</AccountAddress>
				)}
			</TopBarComponent>
		</MainWrapper>
	)
}

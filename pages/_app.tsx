import {DAppProvider, Config, Polygon} from '@usedapp/core'
import ResetCSS from 'ResetCSS'

const config: Config = {
	readOnlyChainId: Polygon.chainId,
	//@ts-ignore
	readOnlyUrls: {
		[Polygon.chainId]: Polygon.rpcUrl,
	},
}
//@ts-ignore
function MyApp({Component, pageProps}) {
	return (
		<DAppProvider config={config}>
			<ResetCSS />
			<Component {...pageProps} />
		</DAppProvider>
	)
}

export default MyApp

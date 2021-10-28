import 'tailwindcss/tailwind.css'
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<Head>
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>
		<Component {...pageProps} />
	</>
)

export default MyApp

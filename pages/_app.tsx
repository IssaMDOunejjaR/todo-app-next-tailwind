import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<ThemeProvider attribute='class' enableSystem={true}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;

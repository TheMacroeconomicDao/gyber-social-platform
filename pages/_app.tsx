import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import '../assets/styles/globals.scss'

import { store } from "../src/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

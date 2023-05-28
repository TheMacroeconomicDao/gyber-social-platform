'use client'
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";

export default function Home() {
	return (
		<RootLayout>
			<div className='page'>
				<Header/>
				<main>
					<Slider/>
				</main>
				<AuthFooter/>
			</div>
		</RootLayout>
	);
}
'use client'
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";

export default function Home() {
	return (
		<RootLayout>
			<div className='page'>
				<Header/>
				<Main>
					<Slider/>
				</Main>
				<AuthFooter/>
			</div>
		</RootLayout>
	);
}
'use client'
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import RootLayout from "./layout";

export default function Home() {
	return (
		<RootLayout>
			<div className='page'>
				<Header/>
				<main 
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					main
				</main>
				<AuthFooter/>
			</div>
		</RootLayout>
	);
}
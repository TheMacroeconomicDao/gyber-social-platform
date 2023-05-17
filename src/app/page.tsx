'use client'

import { Layout} from "antd";
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import { RegForm } from "widgets/regForm";
import RootLayout from "./layout";

export default function Home() {
	return (
		<RootLayout>
			<Layout 
				style={{
					height: '100vh',
    				width: '100%',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					background: '#e6f4ff',
				}}
			>
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
					<RegForm/>
				</main>
				<AuthFooter/>
			</Layout>
		</RootLayout>
	);
}
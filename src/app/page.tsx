import { AuthPage } from "pages/AuthPage";
import RootLayout from "./layout";

export default function Home() {
	return (
		<RootLayout>
			<AuthPage/>
		</RootLayout>
	);
}
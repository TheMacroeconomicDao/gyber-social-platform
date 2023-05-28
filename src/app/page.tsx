'use client'
import { NText } from "shared/ui/text/ui";
import { Container } from "shared/ui/Container";
import { FhTitle } from "shared/ui/titles/FhTitle";
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";

export default function Home() {
	let title = 'Добро пожаловать в будущее'
	let text = 'Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. '

	return (
		<RootLayout>
			<div className='page'>
				<Header/>
				<Main>
					<Slider/>
					<Container 
						m={"100px 0 0 0"}
						gap={36}
					>
						<FhTitle text={title}/>
						<NText text={text}/>
						<NText text={text}/>
						<NText text={text}/>
					</Container>
				</Main>
				<AuthFooter/>
			</div>
		</RootLayout>
	);
}
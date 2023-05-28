"use client";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Roadmap } from "widgets/roadmap";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";
import { NButton } from "shared/ui/buttons/NButton";
import { Team } from "widgets/team/ui";
import { CardMember } from "entities/cardMember";
import { Container } from "shared/ui/Container";
import { FTitle } from "shared/ui/titles/FTitle";
import { NText } from "shared/ui/text/ui";
import { FhTitle } from "shared/ui/titles/FhTitle";

export default function Home() {
	let title = 'Добро пожаловать в будущее'
	let titlePartners = 'Партнеры'

	let text = 'Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. '
	let textPartners = 'Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. '

	const roadmapList = [
		[
			[
				"Разработка прототипа Gyber Social Platform ",
				"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
				"Разработка Dapp The Macro-Economic DAO ",
			],
			[
				"Seed раунд инвестирования",
				"Открытие программ Social Bounty и Secure Bounty ",
				"Тестирование основного кода платформы",
			],
			[
				"PreSale",
				"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
				"Разработка прототипа Blockchain GiberNet",
			],
			[
				"Работа над проектами участников эксперимента",
				"Тестовые реализации проектов участников эксперимента",
				"Релиз Giber Social Platform",
			],
		],
		[
			[
				"Разработка прототипа Gyber Social Platform ",
				"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
				"Разработка Dapp The Macro-Economic DAO ",
			],
			[
				"Seed раунд инвестирования",
				"Открытие программ Social Bounty и Secure Bounty ",
				"Тестирование основного кода платформы",
			],
			[
				"PreSale",
				"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
				"Разработка прототипа Blockchain GiberNet",
			],
			[
				"Работа над проектами участников эксперимента",
				"Тестовые реализации проектов участников эксперимента",
				"Релиз Giber Social Platform",
			],
		],
		[
			[
				"Разработка прототипа Gyber Social Platform ",
				"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
				"Разработка Dapp The Macro-Economic DAO ",
			],
			[
				"Seed раунд инвестирования",
				"Открытие программ Social Bounty и Secure Bounty ",
				"Тестирование основного кода платформы",
			],
			[
				"PreSale",
				"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
				"Разработка прототипа Blockchain GiberNet",
			],
			[
				"Работа над проектами участников эксперимента",
				"Тестовые реализации проектов участников эксперимента",
				"Релиз Giber Social Platform",
			],
		],
	];

	return (
		<div className="page">
			<Header />
			<Main>
				<Slider />
				<Container 
					m={"100px 0 0 0"}
					gap={36}
				>
					<FTitle text={title}/>
					<NText text={text}/>
					<NText text={text}/>
					<NText text={text}/>
				</Container>
				<Roadmap title="Technical roadmap" roadmapList={roadmapList} />
				<Team />
				<Container
					m={"100px 0 0 0"}
					gap={36}
				>
					<FTitle text={titlePartners}/>
					<NText text={textPartners}/>
					<NButton text={'Стать нашим партнером'}/>
				</Container>
			</Main>
			{/* <AuthFooter /> */}
		</div>
	);
}

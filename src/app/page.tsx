"use client";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Roadmap } from "widgets/roadmap";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";
import { NButton } from "shared/ui/buttons/NButton";
import { Team } from "widgets/team/ui";
import { CardMember } from "entities/cardMember";

export default function Home() {
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
				<Roadmap title="Technical roadmap" roadmapList={roadmapList} />
				{/* <Team /> */}
			</Main>
			{/* <AuthFooter /> */}
		</div>
	);
}

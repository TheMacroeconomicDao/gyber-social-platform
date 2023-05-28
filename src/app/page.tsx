"use client";
import { AuthFooter } from "widgets/footers/authFooter";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Roadmap } from "widgets/roadmap";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";

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
			["Работа над проектами участников эксперимента", "Тестовые реализации проектов участников эксперимента", "Релиз Giber Social Platform"],
		],
		[
			["text1", "text2", "text3"],
			["text1", "text2", "text3"],
			["text1", "text2", "text3"],
			["text1", "text2", "text3"],
		],
	];
	return (
		<div className="page">
			<Header />
			<Main>
				<Slider />
				<Roadmap title="Technical roadmap" roadmapList={roadmapList} />
			</Main>
			<AuthFooter />
		</div>
	);
}

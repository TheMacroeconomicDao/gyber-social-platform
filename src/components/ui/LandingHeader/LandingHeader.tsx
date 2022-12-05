import Link from "next/link";
import React, { FC } from "react";
import logo from "../../../../assets/public/images/logo.svg";

import { Button } from "antd";

import s from "./LandingHeader.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

interface LandingHeaderProps {}

const LandingHeader: FC<LandingHeaderProps> = () => {
	const router = useRouter();

	const navigationList = [
		{ label: "Home", link: "/" },
		{ label: "Philosophy", link: "/philosophy" },
		{ label: "Lite Papper", link: "/lite-papper" },
	];

	return (
		<nav className={s.container}>
			<div className={s.logo}>
				<Image
					src={logo}
					className={s.logoImage}
					width={30}
					height={30}
					alt=""
				/>
				<h2>Gyber.org</h2>
			</div>
			<ul className={s.menu}>
				{navigationList.map(({ label, link }) => (
					<li className={s.item}>
						<Link
							href={link}
							className={
								router.pathname == link
									? `${s.active} ${s.link}`
									: s.link
							}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
			<div className={s.buttons}>
				<Button className={s.button} size="large">
					Private Sale
				</Button>
			</div>
		</nav>
	);
};

export default LandingHeader;

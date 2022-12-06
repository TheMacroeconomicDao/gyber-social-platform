import Link from "next/link";
import React, { FC, useState } from "react";
import logo from "../../../../assets/public/images/logo.svg";

import { Button, Drawer } from "antd";

import s from "./LandingHeader.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

import { useMedia } from "react-use";

interface LandingHeaderProps {}

const LandingHeader: FC<LandingHeaderProps> = () => {
	const router = useRouter();
	const burger = useMedia("(min-width: 768px)", true);

	const [drawer, setDrawer] = useState(false);

	const navigationList = [
		{ label: "Home", link: "/" },
		{ label: "Philosophy", link: "/philosophy" },
		{ label: "Lite Papper", link: "/lite-papper" },
	];

	const navigation = (
		<>
			<ul className={s.menu}>
				{navigationList.map(({ label, link }) => (
					<li className={s.item} key={label}>
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
		</>
	);

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
			{burger ? (
				navigation
			) : (
				<Button
					className={s.burgerMenu}
					onClick={() => setDrawer(!drawer)}
				>
					<svg
						width="30"
						height="22"
						viewBox="0 0 33 26"
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M30.9375 0C32.0767 0 33 0.909347 33 2.03125C33 3.15315 32.0767 4.0625 30.9375 4.0625H2.0625C0.923337 4.0625 0 3.15315 0 2.03125C0 0.909347 0.923337 0 2.0625 0H30.9375ZM30.9375 10.9687C32.0767 10.9687 33 11.8781 33 13C33 14.1219 32.0767 15.0312 30.9375 15.0312H2.0625C0.923337 15.0312 0 14.1219 0 13C0 11.8781 0.923337 10.9687 2.0625 10.9687H30.9375ZM30.9375 21.9375C32.0767 21.9375 33 22.8468 33 23.9687C33 25.0907 32.0767 26 30.9375 26H2.0625C0.923337 26 0 25.0907 0 23.9687C0 22.8468 0.923337 21.9375 2.0625 21.9375H30.9375Z" />
					</svg>
				</Button>
			)}

			<Drawer
				open={drawer}
				onClose={() => setDrawer(false)}
				style={{ background: "#111" }}
			>
				{navigation}
			</Drawer>
		</nav>
	);
};

export default LandingHeader;

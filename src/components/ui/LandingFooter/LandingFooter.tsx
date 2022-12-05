import React, { FC } from "react";
import s from "./LandingFooter.module.scss";

interface LandingFooterProps {}

const LandingFooter: FC<LandingFooterProps> = () => (
	<div className={s.container}>
		<div className={s.wrapper}>
			<h1 className={s.title}>By</h1>
			<h2 className={s.subtitle}>Cybernaty</h2>
		</div>
	</div>
);

export default LandingFooter;

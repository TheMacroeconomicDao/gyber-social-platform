import { Button } from "antd";
import React, { FC } from "react";
import s from "./LandingContent.module.scss";

interface LandingContentProps {}

const LandingContent: FC<LandingContentProps> = () => (
	<div className={s.container}>
		<h1 className={s.title}>Welcome to Future</h1>
		<h1 className={s.subtitle}>The Macroeconomic DAO</h1>
		<Button className={s.button} size="large">
			Contract Adress
		</Button>
		<p className={s.info}>
			Millions of users can spend billions on their interests
		</p>
	</div>
);

export default LandingContent;

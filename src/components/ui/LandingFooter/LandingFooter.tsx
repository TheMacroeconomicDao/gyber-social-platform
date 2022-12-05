import React, { FC } from "react";
import s from "./LandingFooter.module.scss";

interface LandingFooterProps {}

const LandingFooter: FC<LandingFooterProps> = () => (
	<div className={s.container}>LandingFooter Component</div>
);

export default LandingFooter;

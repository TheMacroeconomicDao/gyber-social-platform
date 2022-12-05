import React, { FC, ReactElement } from "react";
import LandingHeader from "../../ui/LandingHeader/LandingHeader";
import s from "./LandingLayout.module.scss";

interface LandingLayoutProps {
	children: ReactElement;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => (
	<div className={s.container}>
		<LandingHeader />
		{children}
	</div>
);

export default LandingLayout;

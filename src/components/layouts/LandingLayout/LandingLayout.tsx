import React, { FC, ReactElement } from "react";
import LandingFooter from "../../ui/LandingFooter/LandingFooter";
import LandingHeader from "../../ui/LandingHeader/LandingHeader";
import s from "./LandingLayout.module.scss";

interface LandingLayoutProps {
	children: ReactElement;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => (
	<div className={s.container}>
		<LandingHeader />
		{children}
		<LandingFooter />
	</div>
);

export default LandingLayout;

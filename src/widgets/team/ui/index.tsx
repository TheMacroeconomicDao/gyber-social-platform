import { CardMember } from "entities/cardMember";
import React, { FC } from "react";
import styles from "./style.module.scss";

type TeamProps = {
	children: React.ReactNode;
};

export const Team: FC<TeamProps> = ({ children }) => {
	return (
		<div className={styles.wrap}>
			{/* {children} */}
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
		</div>
	);
};

import { CardMember } from "entities/cardMember";
import React, { FC } from "react";
import { FhTitle } from "shared/ui/titles/FhTitle";
import styles from "./style.module.scss";

type TeamProps = {};

export const Team: FC<TeamProps> = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Команда</h2>

			<div className={styles.wrap}>
				<CardMember />
				<CardMember />
				<CardMember />
				<CardMember />
				<CardMember />
				<CardMember />
			</div>
		</div>
	);
};

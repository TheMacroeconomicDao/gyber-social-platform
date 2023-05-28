import { CardMember } from "entities/cardMember";
import React, { FC } from "react";
import { FhTitle } from "shared/ui/titles/FhTitle";
import styles from "./style.module.scss";

export const Team: FC = () => {
	return (
		<div className={styles.wrap}>
			<FhTitle text={'Сообщество'}/>
			<div className={styles.container}>
				<CardMember />
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

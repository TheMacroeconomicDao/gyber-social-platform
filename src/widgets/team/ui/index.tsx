import { CardMember } from "entities/cardMember";
import React, { FC } from "react";
import { FhTitle } from "shared/ui/titles/FhTitle";
import styles from "./style.module.scss";

<<<<<<< HEAD
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
=======
type TeamProps = {
	children: React.ReactNode;
};

export const Team: FC<TeamProps> = () => {
	return (
		<div className={styles.wrap}>
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
			<CardMember />
>>>>>>> 9ad271aff415a834bf3842a3b50449fab3d20cd9
		</div>
	);
};

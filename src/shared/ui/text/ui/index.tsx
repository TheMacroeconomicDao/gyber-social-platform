import React, { FC } from "react";
import { NButton } from "shared/ui/buttons/NButton";
import styles from "./styles.module.scss";

type NTextProps = {
	title: string;
	subtitle: string;
	button?: string;
};

export const NText: FC<NTextProps> = ({ title, subtitle, button }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.subtitle}>{subtitle}</p>
			<div className={styles.button}>
				{button ? <NButton text={button} /> : null}
			</div>
		</div>
	);
};

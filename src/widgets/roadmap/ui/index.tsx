"use client";
import React, { FC } from "react";
import s from "./styles.module.scss";

interface RoadmapProps {
	title: string;
	roadmapList: any[];
}

export const Roadmap: FC<RoadmapProps> = ({ title, roadmapList }) => {
	return (
		<div className={s.container}>
			<h2 className={s.title}>{title}</h2>

			<div className={s.wrapper}>
				{roadmapList.map((yearInfo, i) => (
					<div className={s.yearList} key={i}>

						{yearInfo.map((quarterList, index) => (
							<div className={s.quarterInfo} key={index}>
								<h2 className={s.subtitle}>Q{index + 1}</h2>
								<ul className={s.quarterList}>
                  
									{quarterList.map((quarter) => (
										<li className={s.quarter} key={quarter}>
											{quarter}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

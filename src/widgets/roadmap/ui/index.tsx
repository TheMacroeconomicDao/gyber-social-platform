"use client";
import React, { FC } from "react";
import s from "./styles.module.scss";

interface RoadmapProps {
	title: string;
	roadmapList: any[];
}

export const Roadmap: FC<RoadmapProps> = ({ title, roadmapList }) => {
	const getCurrentColor = (index: number) => {
		return index == 0 ? "#71B7FF" : index == 1 ? "#C99702" : "#466A88";
	};
	return (
		<div className={s.container}>
			<h2 className={s.title}>{title}</h2>

			<div className={s.wrapper}>
				{roadmapList.map((yearInfo, i) => (
					<div className={s.yearList} key={i}>
						<h2 style={{ color: getCurrentColor(i) }}>2023</h2>
						<svg
							className={s.roadmap}
							viewBox="0 0 1179 1299"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M49.5 2H1073.36L1177 95.9764V170.262V249.024L1073.36 343H914.5H106L2 437V590L105 683.5L1073 684L1177 778V931L1073 1025H105L2 1119V1298.5"
								stroke={getCurrentColor(i)}
								stroke-width="4"
							/>
						</svg>

						{yearInfo.map((quarterList, index) => (
							<div className={s.quarterInfo} key={index}>
								<h2
									className={s.subtitle}
									style={{ color: getCurrentColor(i) }}
								>
									Q{index + 1}
								</h2>
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

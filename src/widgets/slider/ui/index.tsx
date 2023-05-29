"use client";
import React, { FC, useEffect, useState } from "react";
import { FTitle } from "shared/ui/titles/FTitle";
import styles from "./styles.module.scss";
// Import Swiper React components
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import { useSlider } from "shared/models/store/store";

export const Slider: FC = () => {
	const list = [
		{ label: "Gybernaty", icon: "" },
		{ label: "GyberExperiment", icon: "" },
		{ label: "Gyber Social Platform", icon: "" },
		{ label: "AiC", icon: "" },
		{ label: "Events", icon: "" },
	];
	const slide = useSlider((store) => store.slide);
	const setSlide = useSlider((store) => store.setSlide);

	return (
		<div className={styles.wrap}>
			<FTitle text="AiC (Artificial Intelligence and Blockchain Community)" />

			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				pagination={{
					type: "bullets",
					clickable: true,
					el: ".dotE",
				}}
				initialSlide={slide}
				onSlideChangeTransitionEnd={(event) => {
					setSlide(event.activeIndex);
				}}
				className={styles.swiper}
			>
				{list.map(({ label }, i) => (
					<SwiperSlide
						id={i.toString()}
						className={styles.slide}
						key={i}
					>
						<div className={styles.item}>{label}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

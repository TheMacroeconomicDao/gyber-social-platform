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
		{ label: "Gybernaty", icon: "/images/slider-icon.svg" },
		{ label: "GyberExperiment", icon: "/images/slider-icon2.svg" },
		{ label: "Gyber Social Platform", icon: "/images/slider-icon3.svg" },
		{ label: "AiC", icon: "/images/slider-icon.svg" },
		{ label: "Events", icon: "/images/slider-icon2.svg" },
	];
	const slide = useSlider((store) => store.slide);
	const setSlide = useSlider((store) => store.setSlide);

	return (
		<div className={styles.wrap}>
			<FTitle text="AiC (Artificial Intelligence and Blockchain Community)" />

			<div className={styles.swiper}>
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
					navigation={{ nextEl: `.nextEl`, prevEl: `.prevEl` }}
					initialSlide={slide}
					onSlideChangeTransitionEnd={(event) => {
						setSlide(event.activeIndex);
					}}
				>
					{list.map(({ label, icon }, i) => (
						<SwiperSlide
							id={i.toString()}
							className={styles.slide}
							key={i}
						>
							<div className={styles.item}>
								<img src={icon} width={200} />
								<div className={styles.label}>{label}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="prevEl"></div>
				<div className="nextEl"></div>
			</div>
		</div>
	);
};

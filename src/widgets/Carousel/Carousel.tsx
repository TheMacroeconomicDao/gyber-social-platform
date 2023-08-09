'use client'
import cls from './Carousel.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";
import {ReactNode, useState} from "react";
interface CarouselProps {
    className?: string;
}
interface Slide {
    image: string;
    style: string;
}
export const Carousel = ({className}:CarouselProps) => {
    const [items, setItems] = useState<Slide[]>([
        {image: "/images/slider/slide1.png", style: "item1"},
        {image: "/images/slider/slide2.png", style: "item2"},
        {image: "/images/slider/slide3.png", style: "item3"},
        {image: "/images/slider/slide4.png", style: "item4"},
        {image: "/images/slider/slide5.png", style: "item5"},
    ]);

    const toLeft = () => {
    }
    const toRight = () => {

    }

    return (
        <div className={classNames(cls.Carousel, {}, [])}>
            <div className={cls.CarouselContainer}>
                {items.map(item => (
                    <img
                        key={item.image}
                        className={classNames(cls.item, {}, [cls[item.style]])}
                        src={item.image}
                        alt={item.style} />
                ))}
            </div>
            <div className={cls.ControlContainer}>
                <Image onClick={toLeft} src={'/images/slider/leftClickIcon.svg'} alt={'left'} width={100} height={100}/>
                <Image onClick={toRight} src={'/images/slider/rightClickIcon.svg'} alt={'right'} width={100} height={100}/>
            </div>
        </div>
    );
};

import cls from "./Slider.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import Image from "next/image";
import SlideImage from "./SlideImage";

interface SliderProps {
  className?: string;
  path: string;
  mobilePath?: string;
  title?: string;
}

export const Slider = (props: SliderProps) => {
  const { className = "", path, mobilePath, title } = props;
  return (
    <div className={classNames(cls.Slider, {}, [className])}>
      <SlideImage path={path} mobilePath={mobilePath || ""} title={title}/>
      {title && (
        <div className={cls.sliderTitle}>
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

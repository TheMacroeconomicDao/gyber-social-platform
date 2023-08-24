import cls from "./Slider.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import Image from "next/image";

interface SliderProps {
  className?: string;
  path: string;
  title?: string;
}

export const Slider = (props: SliderProps) => {
  const { className = "", path, title } = props;
  return (
    <div className={classNames(cls.Slider, {}, [className])}>
      <Image
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={path}
        alt={title || "slide"}
      />
      {title && (
        <div className={cls.sliderTitle}>
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

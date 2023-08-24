import cls from "./Section.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";

export enum ThemeBackgroundSection {
  FIRST = "url('/images/bg-text-card.jpg')",
  SECOND = "url('/images/bg-social-platform-roadmapping.svg')",
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: ThemeBackgroundSection;
}

export const Section = (props: SectionProps) => {
  const { className = "", children, background = "" } = props;
  return (
    <div
      className={classNames(cls.Section, {}, [className])}
      style={{ backgroundImage: background }}
    >
      {children}
    </div>
  );
};

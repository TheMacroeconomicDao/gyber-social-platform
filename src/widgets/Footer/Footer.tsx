import cls from "./Footer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SocialMedia } from "@/entities/SocialMedia";
import { Logo } from "@/shared/ui/Logo/Logo";
import React from "react";
interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(cls.Footer, {})}>
      <div className={cls.wrapper}>
        <Logo>Gyber</Logo>
        <SocialMedia />
      </div>
    </div>
  );
};

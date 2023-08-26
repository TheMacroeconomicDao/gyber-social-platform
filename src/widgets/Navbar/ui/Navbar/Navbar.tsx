"use client";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { usePathname } from "next/navigation";
import navbarItems from "../../data/routesData";
import Link from "next/link";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({}: NavbarProps) => {
  const pathName = usePathname();

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      {navbarItems.map((item) => (
        <Link
          key={item.link}
          className={classNames(
            cls.item,
            { [cls.active]: pathName == item.link },
            []
          )}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

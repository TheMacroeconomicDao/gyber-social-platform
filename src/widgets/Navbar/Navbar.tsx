'use client'
import cls from './Navbar.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {usePathname} from "next/navigation";
import Link from "next/link";
interface NavbarProps {
    className?: string;
}

export const Navbar = ({}:NavbarProps) => {
    const navbarItems = [
        {title: "Gybernaty", link: "/"},
        {title: "Gyber Experiment", link: "/gyber-experiment"},
        {title: "Gyber Social Platform", link: "/gyber-social-platform"},
        {title: "AIC", link: "/aic"},
        {title: "The Macro-Economic DAO", link: "/macro-economic-dao"},
        {title: "Events", link: "/events"},
    ]
    const pathName = usePathname();

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            {navbarItems.map(item => (
                <Link
                    key={item.link}
                    className={classNames(cls.item, {[cls.active]: pathName == item.link}, [])}
                    href={item.link}
                >
                    {item.title}
                </Link>
            ))}

        </div>
    );
};

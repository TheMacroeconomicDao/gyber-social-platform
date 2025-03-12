import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import React from "react";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {Logo} from "@/shared/ui/Logo/Logo";
import {NavbarTablet} from "../Navbar";
import Link from "next/link";
import Documents from "@/widgets/Documents/ui/Documents";


interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export const Header = ({className = ""}: HeaderProps) => {
    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <Link href={'/'}>
                <Logo>Gyber</Logo>
            </Link>

            <div className={cls.btnGroup}>
                <Documents />
                <Button theme={ThemeButton.ORANGE} disabled={false}>
                    Dapp
                </Button>
                <NavbarTablet/>
            </div>
        </div>
    );
};

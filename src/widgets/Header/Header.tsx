import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import React from "react";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {Logo} from "@/shared/ui/Logo/Logo";

interface HeaderProps {
    children?: React.ReactNode
    className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <Logo>Gyber</Logo>
            <div>
                <Button theme={ThemeButton.ORANGE} disabled>Dapp</Button>
            </div>
        </div>
    );
};

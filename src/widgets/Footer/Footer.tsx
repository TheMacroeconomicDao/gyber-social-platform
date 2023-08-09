import cls from './Footer.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {SocialMedia} from "@/entities/SocialMedia";
import {Logo} from "@/shared/ui/Logo/Logo";
import React from "react";
import {Container} from "@/shared/ui/Container/Container";
interface FooterProps {
    className?: string;
}

export const Footer = ({className}:FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [])}>
            <Container>
                <Logo>Gyber</Logo>
                <SocialMedia />
            </Container>
        </div>
    );
};

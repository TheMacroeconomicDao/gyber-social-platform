import cls from './SocialMedia.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";
interface SocialMediaProps {
    className?: string;
}

export const SocialMedia = ({className = ""}:SocialMediaProps) => {
    const icons = [
        {path: "/images/icons/github-icon.svg", link: "#", title: "github"},
        {path: "/images/icons/telegram-icon.svg", link: "#", title: "telegram"},
        {path: "/images/icons/discord-icon.svg", link: "#", title: "discord"},
        {path: "/images/icons/twitter-icon.svg", link: "#", title: "twitter"},
    ]
    return (
        <div className={classNames(cls.SocialMedia, {}, [className])}>
            {icons.map(item => (
                <Image key={item.title} src={item.path} alt={item.title} width={50} height={50} />
            ))}
        </div>
    );
};

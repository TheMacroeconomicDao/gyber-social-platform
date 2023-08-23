import cls from './SocialMedia.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import ExternalLink, { ThemeExternalLink } from '@/shared/ui/ExternalLink/ExternalLink';
import Image from "next/image";
interface SocialMediaProps {
    className?: string;
}

export const SocialMedia = ({className = ""}:SocialMediaProps) => {
    const icons = [
        {path: "/images/icons/github-icon.svg", link: "https://github.com/OpenDevCommune", title: "github"},
        {path: "/images/icons/telegram-icon.svg", link: "https://t.me/+ts6hNf21bwU5N2Uy", title: "telegram"},
        {path: "/images/icons/discord-icon.svg", link: "https://discord.gg/amzvJ7UTsz", title: "discord"},
        {path: "/images/icons/twitter-icon.svg", link: "https://twitter.com/gybersocial", title: "twitter"},
    ]
    return (
        <div className={classNames(cls.SocialMedia, {}, [className])}>
            {icons.map(item => (
                <ExternalLink 
                    key={item.title} 
                    href={item.link} 
                    theme={ThemeExternalLink.CLEAR}
                    target='_blank'
                >
                    <Image src={item.path} alt={item.title} width={50} height={50} />
                </ExternalLink>
            ))}
          
        </div>
    );
};

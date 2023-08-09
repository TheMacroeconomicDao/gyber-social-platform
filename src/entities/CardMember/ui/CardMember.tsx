import cls from './CardMember.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";
interface CardMemberProps {
    className?: string;
    avatarSrc?: string;
    fullName?: string;
    skills?: string;
}

export const CardMember = (props:CardMemberProps) => {
    const {
        className = '',
        avatarSrc = "/images/teams/member-placeholder.png",
        fullName = "Otto Kustler",
        skills = "Python/C/Dart/TypeScript developer",
    } = props;
    return (
        <div className={classNames(cls.CardMember, {}, [className])}>
            <div className={cls.avatar}>
                <Image fill={true}
                       src={avatarSrc}
                       alt={fullName}/>
            </div>
            <h3>{fullName}</h3>
            <p>{skills}</p>
        </div>
    );
};

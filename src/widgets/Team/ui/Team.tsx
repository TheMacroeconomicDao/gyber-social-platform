
import cls from './Team.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {CardMember} from "@/entities/CardMember";
interface TeamProps {
    className?: string;
}

export const Team = ({className = ""}:TeamProps) => {
    const title = "Our Team"
    const teams = []

    return (
        <div className={classNames(cls.Team, {}, [className])}>
            <h2 className={cls.title}>{title}</h2>
            <div className={cls.wrapper}>

                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>

            </div>
        </div>
    );
};

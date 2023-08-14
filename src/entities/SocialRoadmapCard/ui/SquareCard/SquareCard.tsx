import cls from './SquareCard.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
interface SquareCardProps {
    className?: string;
}

export const SquareCard = ({className = ''}:SquareCardProps) => {
    return (
        <div className={classNames(cls.SquareCard, {}, [className])}>
            Some text
        </div>
    );
};

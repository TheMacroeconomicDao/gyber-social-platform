import cls from './SquareCard.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {FC, ReactNode} from "react";
interface SquareCardProps {
    children: ReactNode
}

export const SquareCard: FC<SquareCardProps>= ({children}) => {
    return (
        <div className={cls.SquareCard}>
            {children}
        </div>
    );
};
